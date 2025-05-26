import React, { useEffect, useRef, useState } from 'react'
import useStyles from './style'
import { koniColors } from '@static/theme'
import { Button, Grid, Input, Typography } from '@mui/material'
import { formatNumbers, showPrefix } from '@utils/utils'
import { FormatNumberThreshold } from '@store/consts/types'
import AnimatedNumber from '@components/AnimatedNumber/AnimatedNumber'
import classNames from 'classnames'
import { Minus, Plus } from '@phosphor-icons/react'
import { getButtonClasses } from '@utils/uiUtils.ts'

export interface IRangeInput {
  label: string
  tokenFromSymbol: string
  tokenToSymbol: string
  currentValue: string
  decreaseValue: () => void
  increaseValue: () => void
  setValue: (value: string) => void
  onBlur: () => void
  style?: React.CSSProperties
  className?: string
  disabled?: boolean
  percentDiff: number
  diffLabel: string
}

export const RangeInput: React.FC<IRangeInput> = ({
  label,
  tokenFromSymbol,
  tokenToSymbol,
  currentValue,
  decreaseValue,
  increaseValue,
  setValue,
  onBlur,
  style,
  className,
  disabled = false,
  percentDiff,
  diffLabel
}) => {
  const { classes } = useStyles()

  const inputRef = useRef<HTMLInputElement>(null)

  const [animatedPercentDiff, setAnimatedPercentDiff] = useState(percentDiff)

  useEffect(() => {
    if (percentDiff !== animatedPercentDiff) {
      setAnimatedPercentDiff(percentDiff)
    }
  }, [percentDiff])

  const allowOnlyDigitsAndTrimUnnecessaryZeros: React.ChangeEventHandler<HTMLInputElement> = e => {
    const regex = /^\d*\.?\d*$/
    if (e.target.value === '' || regex.test(e.target.value)) {
      const startValue = e.target.value
      const caretPosition = e.target.selectionStart

      let parsed = e.target.value
      const zerosRegex = /^0+\d+\.?\d*$/
      if (zerosRegex.test(parsed)) {
        parsed = parsed.replace(/^0+/, '')
      }

      const dotRegex = /^\.\d*$/
      if (dotRegex.test(parsed)) {
        parsed = `0${parsed}`
      }

      const diff = startValue.length - parsed.length

      setValue(parsed)
      if (caretPosition !== null && parsed !== startValue) {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.selectionStart = Math.max(caretPosition - diff, 0)
            inputRef.current.selectionEnd = Math.max(caretPosition - diff, 0)
          }
        }, 0)
      }
    } else if (!regex.test(e.target.value)) {
      setValue('')
    }
  }

  const percentageThresholds: FormatNumberThreshold[] = [
    {
      value: 10,
      decimals: 2
    },
    {
      value: 1000,
      decimals: 2
    },
    {
      value: 10000,
      decimals: 2
    },
    {
      value: 1000000,
      decimals: 2,
      divider: 1000
    },
    {
      value: 1000000000,
      decimals: 2,
      divider: 1000000
    },
    {
      value: Infinity,
      decimals: 2,
      divider: 1000000000
    }
  ]

  return (
    <Grid className={classNames(classes.container, className)} style={style} container direction='column' alignItems='center'>
      <Grid
        className={classes.data}
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'>
        <Typography className={classes.label}>{label}</Typography>
        <Typography className={classes.tokens}>
          {tokenToSymbol} per {tokenFromSymbol}
        </Typography>
      </Grid>
      <Grid
        className={classNames(classes.controls, {
          '-disabled': disabled,
        })}
        container
        direction='row'
        alignItems='center'
        wrap='nowrap'>
        {disabled ? null : (
          <Button
            className={getButtonClasses({
              size: 'sm',
              layout: 'icon-only',
              variant: 'primary'
            }, classes.button)}
            onClick={decreaseValue}
            startIcon={<Minus />}
            disableRipple
          />
        )}
        <Input
          className={classes.value}
          value={currentValue}
          ref={inputRef}
          onChange={allowOnlyDigitsAndTrimUnnecessaryZeros}
          onBlur={onBlur}
          disableUnderline={true}
          disabled={disabled}
          inputProps={{
            inputMode: 'decimal',
            'aria-label': 'price range'
          }}
        />
        {disabled ? null : (
          <Button
            className={getButtonClasses({
              size: 'sm',
              layout: 'icon-only',
              variant: 'primary'
            }, classes.button)}
            onClick={increaseValue}
            startIcon={<Plus />}
            disableRipple
          />
        )}
      </Grid>
      <Grid
        className={classes.diffWrapper}
        container
        direction='row'
        alignItems='center'
        wrap='nowrap'>
        <Grid className={classes.diffLabelWrapper}>
          <Typography className={classes.diffLabel}>{diffLabel}</Typography>
        </Grid>
        <Typography
          className={classes.diff}
          style={{
            color: percentDiff >= 0 ? koniColors.palette['lightGreen-8'] : koniColors.semantic.error
          }}>
          {percentDiff >= 0 ? '+' : ''}
          {percentDiff ? (
            <>
              <AnimatedNumber
                start={animatedPercentDiff}
                finish={percentDiff}
                format={e => formatNumbers(percentageThresholds)(e.toString())}
              />
              {showPrefix(percentDiff)}
            </>
          ) : (
            0
          )}
          %
        </Typography>
      </Grid>
    </Grid>
  )
}

export default RangeInput
