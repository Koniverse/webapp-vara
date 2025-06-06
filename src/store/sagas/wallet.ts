import { PayloadAction } from '@reduxjs/toolkit'
import { actions as positionsActions } from '@store/reducers/positions'
import { actions as snackbarsActions } from '@store/reducers/snackbars'
import { tokens } from '@store/selectors/pools'
import { address, balance, hexAddress, status } from '@store/selectors/wallet'
import { actions, Status, actions as walletActions } from '@store/reducers/wallet'
import {
  SagaGenerator,
  all,
  call,
  delay,
  put,
  select,
  spawn,
  takeLatest,
  takeLeading
} from 'typed-redux-saga'
import { positionsList } from '@store/selectors/positions'
import { getApi, getVft } from './connection'
import { createLoaderKey, getTokenBalances } from '@utils/utils'
import { GearKeyring, HexString } from '@gear-js/api'
import {
  DEPOSIT_OR_WITHDRAW_SINGLE_TOKEN_GAS_AMOUNT,
  DEPOSIT_OR_WITHDRAW_TOKEN_PAIR_GAS_AMOUNT,
  DEPOSIT_VARA_SAFE_GAS_AMOUNT,
  FAUCET_DEPLOYER_MNEMONIC,
  FAUCET_SAFE_TRANSACTION_FEE,
  getFaucetTokenList,
  TokenAirdropAmount, WALLET_LABELS_SUPPORTED
} from '@store/consts/static'
import { closeSnackbar } from 'notistack'
import { SubstrateProvider } from "@subwallet-connect/common";
import { ActorId, batchTxs, Invariant } from '@invariant-labs/vara-sdk'
import { VARA_ADDRESS } from '@invariant-labs/vara-sdk/target/consts'
import { networkType } from '@store/selectors/connection'
import { WalletConnectActionPayload } from '@store/consts/types.ts'
import { getWCSigner } from '@utils/connector'

type FrameSystemAccountInfo = {
  data: {
    free: string
    reserved: string
    miscFrozen: string
    feeFrozen: string
  }
  nonce: number
  consumers: number
  providers: number
  sufficients: number
}
export function* getBalance(walletAddress: string): SagaGenerator<string> {
  const connection = yield* getApi()
  const accountInfoResponse = yield* call(
    [connection.query.system.account, connection.query.system.account],
    walletAddress
  ) as any

  const accountInfo = accountInfoResponse.toPrimitive() as FrameSystemAccountInfo

  return accountInfo.data.free
}

export function* handleAirdrop(): Generator {
  const stringAddress = yield* select(address)

  if (!stringAddress) {
    return yield* put(
      snackbarsActions.add({
        message: 'Connect wallet to claim the faucet.',
        variant: 'error',
        persist: false
      })
    )
  }
  const walletAddress = yield* select(hexAddress)
  const walletBalance = yield* select(balance)

  if (FAUCET_SAFE_TRANSACTION_FEE > walletBalance) {
    return yield* put(
      snackbarsActions.add({
        message: 'Insufficient VARA balance.',
        variant: 'error',
        persist: false,
        link: {
          label: 'GET VARA',
          href: 'https://idea.gear-tech.io/programs?node=wss%3A%2F%2Ftestnet.vara.network'
        }
      })
    )
  }

  const loaderAirdrop = createLoaderKey()

  try {
    yield put(
      snackbarsActions.add({
        message: 'Airdrop in progress...',
        variant: 'pending',
        persist: true,
        key: loaderAirdrop
      })
    )

    const deployerAccount = yield* call(
      [GearKeyring, GearKeyring.fromMnemonic],
      FAUCET_DEPLOYER_MNEMONIC
    )

    console.log('Deployer:', deployerAccount.address, 'Uri:', FAUCET_DEPLOYER_MNEMONIC)

    const api = yield* getApi()
    const vft = yield* getVft()
    const network = yield* select(networkType)

    vft.setAdmin(deployerAccount)
    const txs = []

    const faucetTokenList = getFaucetTokenList(network)

    for (const ticker in faucetTokenList) {
      const address = faucetTokenList[ticker as keyof typeof faucetTokenList]
      const airdropAmount = TokenAirdropAmount[ticker as keyof typeof faucetTokenList]

      console.log('Airdropping', airdropAmount, ticker, address, 'to', walletAddress)

      const mintTx = yield* call([vft, vft.mintTx], walletAddress, airdropAmount, address)
      txs.push(mintTx)
    }

    yield* call(batchTxs, api, deployerAccount, txs)

    closeSnackbar(loaderAirdrop)
    yield put(snackbarsActions.remove(loaderAirdrop))

    const tokenNames = Object.keys(faucetTokenList).join(', ')

    yield* put(
      snackbarsActions.add({
        message: `Airdropped ${tokenNames} tokens`,
        variant: 'success',
        persist: false
        // txid: hash
      })
    )

    yield* call(fetchBalances, [...Object.values(faucetTokenList)])
  } catch (error) {
    console.log(error)

    closeSnackbar(loaderAirdrop)
    yield put(snackbarsActions.remove(loaderAirdrop))
  }
}

export function* init({ isEagerConnect, wallet }: WalletConnectActionPayload): Generator {
  try {
    if (isEagerConnect) {
      yield* delay(500)
    }
    yield* put(actions.setStatus(Status.Init))

    const accounts = wallet.accounts;

    if (isEagerConnect) {
      yield* put(
        snackbarsActions.add({
          message: 'Wallet reconnected.',
          variant: 'success',
          persist: false
        })
      )
    } else {
      yield* put(
        snackbarsActions.add({
          message: 'Wallet connected.',
          variant: 'success',
          persist: false
        })
      )
    }

    const provider = wallet.provider as SubstrateProvider;
    const address = accounts[0].address;
    const api = yield* getApi()
    yield* put(actions.setAddress(address))

    if( wallet.label === WALLET_LABELS_SUPPORTED.WALLETCONNECT) {
      wallet.signer = yield* call(getWCSigner, address, provider, api);
    }

    if (!wallet.signer) {
      yield* put(
        snackbarsActions.add({
          message: 'No signer found.',
          variant: 'error',
          persist: false
        })
      )
      return
    }

    yield* put(actions.setSigner(wallet.signer))
    const allTokens = yield* select(tokens)
    yield* call(fetchBalances, Object.keys(allTokens) as HexString[])

    yield* put(actions.setStatus(Status.Initialized))
  } catch (error) {
    console.log(error)
  }
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function* handleConnect(action: PayloadAction<WalletConnectActionPayload>): Generator {
  const walletStatus = yield* select(status)
  if (walletStatus === Status.Initialized) {
    yield* put(
      snackbarsActions.add({
        message: 'Wallet already connected.',
        variant: 'info',
        persist: false
      })
    )
    return
  }
  yield* call(init, action.payload)
}

export function* handleDisconnect(): Generator {
  try {
    const { loadedPages } = yield* select(positionsList)

    yield* put(actions.resetState())

    yield* put(
      snackbarsActions.add({
        message: 'Wallet disconnected.',
        variant: 'success',
        persist: false
      })
    )

    yield* put(positionsActions.setPositionsList([]))
    yield* put(positionsActions.setPositionsListLength(0n))
    yield* put(
      positionsActions.setPositionsListLoadedStatus({
        indexes: Object.keys(loadedPages).map(key => Number(key)),
        isLoaded: false
      })
    )

    yield* put(
      positionsActions.setCurrentPositionTicks({
        lowerTick: undefined,
        upperTick: undefined
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export function* fetchBalances(tokens: HexString[]): Generator {
  try {
    const stringAddress = yield* select(address)
    const walletAddress = yield* select(hexAddress)
    const vft = yield* getVft()
    const network = yield* select(networkType)

    if (!walletAddress) {
      return
    }

    yield* put(actions.setIsBalanceLoading(true))

    const balance = yield* call(getBalance, stringAddress)
    yield* put(actions.setBalance(BigInt(balance)))

    const tokenBalances = yield* call(getTokenBalances, tokens, vft, walletAddress, network)

    yield* put(walletActions.setBalance(BigInt(balance)))

    yield* put(
      walletActions.addTokenBalances(
        tokenBalances.map(([address, balance]) => {
          return {
            address,
            balance
          }
        })
      )
    )
    yield* put(actions.setIsBalanceLoading(false))
  } catch (error) {
    console.log(error)
    yield* put(actions.setIsBalanceLoading(false))
  }
}

export function* handleReconnect(): Generator {}

export function* withdrawTokenPairTx(tokenX: HexString, tokenY: HexString, invariant: Invariant) {
  const withdrawTxs = []

  if (tokenX === VARA_ADDRESS || tokenY === VARA_ADDRESS) {
    const isTokenXVara = tokenX === VARA_ADDRESS

    const withdrawVaraTx = yield* call(
      [invariant, invariant.withdrawVaraTx],
      null,
      DEPOSIT_VARA_SAFE_GAS_AMOUNT
    )
    withdrawTxs.push(withdrawVaraTx)

    const withdrawSecondTokenTx = yield* call(
      [invariant, invariant.withdrawSingleTokenTx],
      isTokenXVara ? tokenY : tokenX,
      null,
      DEPOSIT_OR_WITHDRAW_SINGLE_TOKEN_GAS_AMOUNT
    )

    withdrawTxs.push(withdrawSecondTokenTx)
  } else {
    const withdrawTx = yield* call(
      [invariant, invariant.withdrawTokenPairTx],
      [tokenX, null] as [ActorId, bigint | null],
      [tokenY, null] as [ActorId, bigint | null],
      DEPOSIT_OR_WITHDRAW_TOKEN_PAIR_GAS_AMOUNT
    )

    withdrawTxs.push(withdrawTx)
  }

  return withdrawTxs
}
export function* handleGetBalances(action: PayloadAction<HexString[]>): Generator {
  yield* call(fetchBalances, action.payload)
}

export function* connectHandler(): Generator {
  yield takeLeading(actions.connect, handleConnect)
}

export function* disconnectHandler(): Generator {
  yield takeLeading(actions.disconnect, handleDisconnect)
}

export function* airdropSaga(): Generator {
  yield takeLeading(actions.airdrop, handleAirdrop)
}

export function* getBalancesHandler(): Generator {
  yield takeLatest(actions.getBalances, handleGetBalances)
}

export function* reconnecthandler(): Generator {
  yield takeLatest(actions.reconnect, handleReconnect)
}

export function* walletSaga(): Generator {
  yield all(
    [airdropSaga, connectHandler, disconnectHandler, getBalancesHandler, reconnecthandler].map(
      spawn
    )
  )
}
