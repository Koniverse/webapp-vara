import AnimatedButton, { ProgressState } from '@components/AnimatedButton/AnimatedButton'
import DepositAmountInput from '@components/Inputs/DepositAmountInput/DepositAmountInput'
import Select from '@components/Inputs/Select/Select'
import { Button, Grid, Typography } from '@mui/material'
import {
  ALL_FEE_TIERS_DATA,
  EXTRA_BALANCE_TO_DEPOSIT_VARA,
  POOL_SAFE_TRANSACTION_FEE
} from '@store/consts/static'
import {
  convertBalanceToBigint,
  getScaleFromString,
  parsePathFeeToFeeString,
  printBigint,
  tickerToAddress,
  trimDecimalZeros
} from '@utils/utils'
import classNames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import FeeSwitch from '../FeeSwitch/FeeSwitch'
import { useStyles } from './style'
import { PositionOpeningMethod } from '@store/consts/types'
import { SwapToken } from '@store/selectors/wallet'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { Network } from '@invariant-labs/vara-sdk'
import { Status } from '@store/reducers/wallet'
import ChangeWalletButton from '@components/Header/HeaderButton/ChangeWalletButton'
import { decodeAddress, HexString } from '@gear-js/api'
import { getButtonClasses } from '@utils/uiUtils.ts'
import { ArrowsLeftRight } from '@phosphor-icons/react'

export interface InputState {
  value: string
  setValue: (value: string) => void
  blocked: boolean
  blockerInfo?: string
  decimalsLimit: number
}

export interface IDepositSelector {
  initialTokenFrom: string
  initialTokenTo: string
  initialFee: string
  tokens: Record<string, SwapToken>
  setPositionTokens: (
    tokenAAddress: HexString | null,
    tokenBAddress: HexString | null,
    feeTierIndex: number
  ) => void
  onAddLiquidity: () => void
  tokenAInputState: InputState
  tokenBInputState: InputState
  feeTiers: number[]
  className?: string
  progress: ProgressState
  priceA?: number
  priceB?: number
  onReverseTokens: () => void
  poolIndex: number | null
  bestTierIndex?: number
  handleAddToken: (address: HexString) => void
  commonTokens: HexString[]
  initialHideUnknownTokensValue: boolean
  onHideUnknownTokensChange: (val: boolean) => void
  priceALoading?: boolean
  priceBLoading?: boolean
  feeTierIndex: number
  concentrationArray: number[]
  concentrationIndex: number
  minimumSliderIndex: number
  positionOpeningMethod: PositionOpeningMethod
  isBalanceLoading: boolean
  isGetLiquidityError: boolean
  ticksLoading: boolean
  network: Network
  varaBalance: bigint
  walletStatus: Status
  onConnectWallet: () => void
  onDisconnectWallet: () => void
}

export const DepositSelector: React.FC<IDepositSelector> = ({
  initialTokenFrom,
  initialTokenTo,
  initialFee,
  tokens,
  setPositionTokens,
  onAddLiquidity,
  tokenAInputState,
  tokenBInputState,
  feeTiers,
  className,
  progress,
  priceA,
  priceB,
  onReverseTokens,
  poolIndex,
  bestTierIndex,
  handleAddToken,
  commonTokens,
  initialHideUnknownTokensValue,
  onHideUnknownTokensChange,
  priceALoading,
  priceBLoading,
  feeTierIndex,
  concentrationArray,
  concentrationIndex,
  minimumSliderIndex,
  positionOpeningMethod,
  isBalanceLoading,
  isGetLiquidityError,
  ticksLoading,
  network,
  varaBalance,
  walletStatus,
  onConnectWallet,
  onDisconnectWallet
}) => {
  const { classes } = useStyles()

  const [tokenA, setTokenA] = useState<HexString | null>(null)
  const [tokenB, setTokenB] = useState<HexString | null>(null)
  const [tokenAPrice, setTokenAPrice] = useState<number | undefined>(undefined)
  const [tokenBPrice, setTokenBPrice] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!tokenAPrice) {
      setTokenAPrice(priceA)
    }

    if (!tokenBPrice) {
      setTokenBPrice(priceB)
    }
  }, [priceALoading, priceBLoading, priceA, priceB])

  const [hideUnknownTokens, setHideUnknownTokens] = useState<boolean>(initialHideUnknownTokensValue)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded || Object.keys(tokens).length !== 0 || ALL_FEE_TIERS_DATA.length !== 0) {
      const tokenAFromPath =
        tokens[tickerToAddress(network, initialTokenFrom)]?.assetAddress || null
      const tokenBFromPath = tokens[tickerToAddress(network, initialTokenTo)]?.assetAddress || null
      let feeTierIndexFromPath = 0

      const parsedFee = parsePathFeeToFeeString(initialFee)

      ALL_FEE_TIERS_DATA.forEach((feeTierData, index) => {
        if (feeTierData.tier.fee.toString() === parsedFee) {
          feeTierIndexFromPath = index
        }
      })

      const decodedTokenA =
        typeof tokenAFromPath === 'string' ? decodeAddress(tokenAFromPath) : null
      const decodedTokenB =
        typeof tokenBFromPath === 'string' ? decodeAddress(tokenBFromPath) : null
      setTokenA(decodedTokenA)
      setTokenB(decodedTokenB)
      setPositionTokens(decodedTokenA, decodedTokenB, feeTierIndexFromPath)

      setIsLoaded(true)
    } else {
      setIsLoaded(false)
    }
  }, [Object.keys(tokens).length])

  const getButtonMessage = useCallback(() => {
    if (tokenA === null || tokenB === null) {
      return 'Select tokens'
    }

    if (tokenA === tokenB) {
      return 'Select different tokens'
    }

    if (positionOpeningMethod === 'concentration' && concentrationIndex < minimumSliderIndex) {
      return concentrationArray[minimumSliderIndex]
        ? `Set concentration to at least ${concentrationArray[minimumSliderIndex].toFixed(0)}x`
        : 'Set higher fee tier'
    }

    if (isGetLiquidityError) {
      return 'Provide a smaller amount'
    }

    if (
      !tokenAInputState.blocked &&
      convertBalanceToBigint(tokenAInputState.value, tokens[tokenA].decimals) >
        tokens[tokenA].balance
    ) {
      return `Not enough ${tokens[tokenA].symbol}`
    }

    if (
      !tokenBInputState.blocked &&
      convertBalanceToBigint(tokenBInputState.value, tokens[tokenB].decimals) >
        tokens[tokenB].balance
    ) {
      return `Not enough ${tokens[tokenB].symbol}`
    }

    if (varaBalance < EXTRA_BALANCE_TO_DEPOSIT_VARA || varaBalance < POOL_SAFE_TRANSACTION_FEE) {
      return `Insufficient VARA`
    }

    if (
      (!tokenAInputState.blocked && +tokenAInputState.value === 0) ||
      (!tokenBInputState.blocked && +tokenBInputState.value === 0)
    ) {
      return !tokenAInputState.blocked && !tokenBInputState.blocked
        ? 'Enter token amounts'
        : 'Enter token amount'
    }

    return 'Add Position'
  }, [
    tokenA,
    tokenB,
    tokenAInputState,
    tokenBInputState,
    tokens,
    positionOpeningMethod,
    concentrationIndex,
    feeTierIndex,
    minimumSliderIndex
  ])

  const [wasRunTokenA, setWasRunTokenA] = useState(false)
  const [wasRunTokenB, setWasRunTokenB] = useState(false)

  useEffect(() => {
    if (!wasRunTokenA && tokens[tickerToAddress(network, initialTokenFrom)]) {
      setTokenA(decodeAddress(tickerToAddress(network, initialTokenFrom)))
      setWasRunTokenA(true)
    }

    if (!wasRunTokenB && tokens[tickerToAddress(network, initialTokenTo)]) {
      setTokenB(decodeAddress(tickerToAddress(network, initialTokenTo)))
      setWasRunTokenB(true)
    }
  }, [wasRunTokenA, wasRunTokenB, tokens])

  useEffect(() => {
    if (tokenA !== null) {
      if (getScaleFromString(tokenAInputState.value) > Number(tokens[tokenA].decimals)) {
        const parts = tokenAInputState.value.split('.')

        tokenAInputState.setValue(
          parts[0] + '.' + parts[1].slice(0, Number(tokens[tokenA].decimals))
        )
      }
    }

    if (tokenB !== null) {
      if (getScaleFromString(tokenBInputState.value) > Number(tokens[tokenB].decimals)) {
        const parts = tokenBInputState.value.split('.')

        tokenAInputState.setValue(
          parts[0] + '.' + parts[1].slice(0, Number(tokens[tokenB].decimals))
        )
      }
    }
  }, [poolIndex])

  return (
    <Grid container direction='column' className={classNames(classes.wrapper, className)}>
      <Typography className={classes.sectionTitle}>Tokens</Typography>

      <Grid container className={classNames(classes.sectionWrapper, classes.tokenArea)}>
        <Grid container className={classes.selects} direction='row' justifyContent='space-between'>
          <Grid className={classes.selectWrapper}>
            <Select
              tokens={tokens}
              current={tokenA !== null ? tokens[tokenA] : null}
              onSelect={address => {
                setTokenA(address)
                setPositionTokens(address, tokenB, feeTierIndex)
              }}
              centered
              className={classes.customSelect}
              handleAddToken={handleAddToken}
              sliceName
              commonTokens={commonTokens}
              initialHideUnknownTokensValue={initialHideUnknownTokensValue}
              onHideUnknownTokensChange={e => {
                onHideUnknownTokensChange(e)
                setHideUnknownTokens(e)
              }}
              hiddenUnknownTokens={hideUnknownTokens}
            />
          </Grid>

          <TooltipHover text='Reverse tokens'>
            <Button
              className={getButtonClasses({
                size: 'sm',
                layout: 'icon-only',
                variant: 'ghost',
              }, classes.arrows)}
              startIcon={<ArrowsLeftRight />}
              onClick={() => {
                if (ticksLoading) {
                  return
                }

                if (!tokenBInputState.blocked) {
                  tokenAInputState.setValue(tokenBInputState.value)
                } else {
                  tokenBInputState.setValue(tokenAInputState.value)
                }
                const pom = tokenA
                setTokenA(tokenB)
                setTokenB(pom)
                const pricePom = tokenAPrice
                setTokenAPrice(tokenBPrice)
                setTokenBPrice(pricePom)
                onReverseTokens()
              }}
            />
          </TooltipHover>

          <Grid className={classes.selectWrapper}>
            <Select
              tokens={tokens}
              current={tokenB !== null ? tokens[tokenB] : null}
              onSelect={index => {
                setTokenB(index)
                setPositionTokens(tokenA, index, feeTierIndex)
              }}
              centered
              className={classes.customSelect}
              handleAddToken={handleAddToken}
              sliceName
              commonTokens={commonTokens}
              initialHideUnknownTokensValue={initialHideUnknownTokensValue}
              onHideUnknownTokensChange={e => {
                onHideUnknownTokensChange(e)
                setHideUnknownTokens(e)
              }}
              hiddenUnknownTokens={hideUnknownTokens}
            />
          </Grid>
        </Grid>

        <FeeSwitch
          onSelect={fee => {
            setPositionTokens(tokenA, tokenB, fee)
          }}
          feeTiers={feeTiers}
          showOnlyPercents
          bestTierIndex={bestTierIndex}
          currentValue={feeTierIndex}
        />
      </Grid>

      <Typography className={classes.sectionTitle}>Deposit Amount</Typography>
      <Grid container className={classNames(classes.sectionWrapper, classes.depositAmountArea)}>
        <DepositAmountInput
          tokenPrice={tokenAPrice}
          currency={tokenA !== null ? tokens[tokenA].symbol : null}
          currencyIconSrc={tokenA !== null ? tokens[tokenA].logoURI : undefined}
          currencyIsUnknown={tokenA !== null ? tokens[tokenA].isUnknown ?? false : false}
          placeholder='0.0'
          onMaxClick={() => {
            if (tokenA === null) {
              return
            }

            tokenAInputState.setValue(
              trimDecimalZeros(printBigint(tokens[tokenA].balance, tokens[tokenA].decimals))
            )
          }}
          balanceValue={
            tokenA !== null ? printBigint(tokens[tokenA].balance, tokens[tokenA].decimals) : ''
          }
          onBlur={() => {
            if (tokenA !== null && tokenB !== null && tokenAInputState.value.length === 0) {
              tokenAInputState.setValue('0.0')
            }
            tokenAInputState.setValue(trimDecimalZeros(tokenAInputState.value))
          }}
          {...tokenAInputState}
          priceLoading={priceALoading}
          isBalanceLoading={isBalanceLoading}
          walletUninitialized={walletStatus !== Status.Initialized}
        />

        <div className={classes.amountInputSeparator}></div>

        <DepositAmountInput
          tokenPrice={tokenBPrice}
          currency={tokenB !== null ? tokens[tokenB].symbol : null}
          currencyIconSrc={tokenB !== null ? tokens[tokenB].logoURI : undefined}
          currencyIsUnknown={tokenB !== null ? tokens[tokenB].isUnknown ?? false : false}
          placeholder='0.0'
          onMaxClick={() => {
            if (tokenB === null) {
              return
            }

            tokenBInputState.setValue(
              trimDecimalZeros(printBigint(tokens[tokenB].balance, tokens[tokenB].decimals))
            )
          }}
          balanceValue={
            tokenB !== null ? printBigint(tokens[tokenB].balance, tokens[tokenB].decimals) : ''
          }
          onBlur={() => {
            if (tokenA !== null && tokenB !== null && tokenBInputState.value.length === 0) {
              tokenBInputState.setValue('0.0')
            }
            tokenBInputState.setValue(trimDecimalZeros(tokenBInputState.value))
          }}
          {...tokenBInputState}
          priceLoading={priceBLoading}
          isBalanceLoading={isBalanceLoading}
          walletUninitialized={walletStatus !== Status.Initialized}
        />
      </Grid>
      {walletStatus !== Status.Initialized ? (
        <ChangeWalletButton
          name='Connect wallet'
          onConnect={onConnectWallet}
          connected={false}
          onDisconnect={onDisconnectWallet}
          className={getButtonClasses({
            size: 'lg',
            variant: 'primary',
            layout: 'text-only'
            },
            classes.connectWalletButton)}
        />
      ) : getButtonMessage() === 'Insufficient AZERO' ? (
        <TooltipHover
          text='More AZERO is required to cover the transaction fee. Obtain more AZERO to complete this transaction.'
          top={-10}>
          <div>
            <AnimatedButton
              className={classNames(
                classes.addButton,
                progress === 'none' ? classes.hoverButton : undefined
              )}
              onClick={() => {
                if (progress === 'none') {
                  onAddLiquidity()
                }
              }}
              disabled={getButtonMessage() !== 'Add Position'}
              content={getButtonMessage()}
              progress={progress}
            />
          </div>
        </TooltipHover>
      ) : (
        <AnimatedButton
          className={classNames(
            classes.addButton,
            progress === 'none' ? classes.hoverButton : undefined
          )}
          onClick={() => {
            if (progress === 'none') {
              onAddLiquidity()
            }
          }}
          disabled={getButtonMessage() !== 'Add Position'}
          content={getButtonMessage()}
          progress={progress}
        />
      )}
    </Grid>
  )
}

export default DepositSelector
