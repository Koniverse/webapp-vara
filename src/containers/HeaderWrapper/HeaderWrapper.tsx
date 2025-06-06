import Header from '@components/Header/Header'
import { RPC, CHAINS, RECOMMENDED_RPC_ADDRESS } from '@store/consts/static'
import { actions, RpcStatus } from '@store/reducers/connection'
import { Status, actions as walletActions } from '@store/reducers/wallet'
import { networkType, rpcAddress, rpcStatus } from '@store/selectors/connection'
import { address, status } from '@store/selectors/wallet'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { actions as snackbarsActions } from '@store/reducers/snackbars'
import { Chain } from '@store/consts/types'
import { Network } from '@invariant-labs/vara-sdk'
import { RpcErrorModal } from '@components/RpcErrorModal/RpcErrorModal'
import useWalletConnection from '@hooks/useWalletConnection.tsx'

export const HeaderWrapper: React.FC = () => {
  const dispatch = useDispatch()
  const { connectWallet, disconnectWallet, reconnectWallet } = useWalletConnection()
  const walletStatus = useSelector(status)
  const currentNetwork = useSelector(networkType)
  const currentRpc = useSelector(rpcAddress)
  const location = useLocation()
  const walletAddress = useSelector(address)
  const navigate = useNavigate()

  const defaultTestnetRPC = useMemo(() => {
    const lastRPC = localStorage.getItem(`INVARIANT_RPC_Vara_${Network.Testnet}`)

    if (lastRPC === null) {
      localStorage.setItem(`INVARIANT_RPC_Vara_${Network.Testnet}`, RPC.TEST)
    }

    return lastRPC === null ? RPC.TEST : lastRPC
  }, [])

  const defaultMainnetRPC = useMemo(() => {
    const lastRPC = localStorage.getItem(`INVARIANT_RPC_Vara_${Network.Mainnet}`)

    if (lastRPC === null) {
      localStorage.setItem(`INVARIANT_RPC_Vara_${Network.Mainnet}`, RPC.MAIN)
    }

    return lastRPC === null ? RPC.MAIN : lastRPC
  }, [])

  const activeChain = CHAINS.find(chain => chain.name === Chain.Vara) ?? CHAINS[0]

  const currentRpcStatus = useSelector(rpcStatus)

  const useDefaultRpc = () => {
    localStorage.setItem(
      `INVARIANT_RPC_Vara_${currentNetwork}`,
      RECOMMENDED_RPC_ADDRESS[currentNetwork]
    )
    dispatch(actions.setRPCAddress(RECOMMENDED_RPC_ADDRESS[currentNetwork]))
    dispatch(actions.setRpcStatus(RpcStatus.Uninitialized))
    localStorage.setItem('IS_RPC_WARNING_IGNORED', 'false')
  }

  const useCurrentRpc = () => {
    dispatch(actions.setRpcStatus(RpcStatus.IgnoredWithError))
    localStorage.setItem('IS_RPC_WARNING_IGNORED', 'true')
  }

  return (
    <>
      {currentRpcStatus === RpcStatus.Error &&
        currentRpc !== RECOMMENDED_RPC_ADDRESS[currentNetwork] && (
          <RpcErrorModal
            rpcAddress={currentRpc}
            useDefaultRpc={useDefaultRpc}
            useCurrentRpc={useCurrentRpc}
          />
        )}
      <Header
        address={walletAddress}
        onNetworkSelect={(network, rpcAddress) => {
          if (rpcAddress !== currentRpc) {
            localStorage.setItem(`INVARIANT_RPC_Vara_${network}`, rpcAddress)
            dispatch(actions.setRPCAddress(rpcAddress))
            dispatch(actions.setRpcStatus(RpcStatus.Uninitialized))
            localStorage.setItem('IS_RPC_WARNING_IGNORED', 'false')
          }

          if (network !== currentNetwork) {
            if (location.pathname.startsWith('/exchange')) {
              navigate('/exchange')
            }

            if (location.pathname.startsWith('/newPosition')) {
              navigate('/newPosition')
            }

            dispatch(actions.setNetwork(network))
          }
        }}
        onConnectWallet={async () => {
          await connectWallet()
        }}
        landing={location.pathname.substring(1)}
        walletConnected={walletStatus === Status.Initialized}
        onDisconnectWallet={async () => {
          await disconnectWallet()
        }}
        onFaucet={() => dispatch(walletActions.airdrop())}
        typeOfNetwork={currentNetwork}
        rpc={currentRpc}
        defaultTestnetRPC={defaultTestnetRPC}
        onCopyAddress={() => {
          navigator.clipboard.writeText(walletAddress)

          dispatch(
            snackbarsActions.add({
              message: 'Wallet address copied.',
              variant: 'success',
              persist: false
            })
          )
        }}
        onChangeWallet={async () => {
          await reconnectWallet()
        }}
        activeChain={activeChain}
        onChainSelect={chain => {
          if (chain.name !== activeChain.name) {
            window.location.replace(chain.address)
          }
        }}
        network={currentNetwork}
        defaultMainnetRPC={defaultMainnetRPC}
        rpcStatus={currentRpcStatus}
      />
    </>
  )
}

export default HeaderWrapper
