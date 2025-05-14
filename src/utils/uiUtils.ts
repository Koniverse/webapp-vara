import classNames from 'classnames'

export const toBlur = 'global-blur'

export const blurContent = () => {
  const el = document.getElementById(toBlur)
  if (!el) return
  el.style.filter = 'blur(4px) brightness(0.4)'
}
export const unblurContent = () => {
  const el = document.getElementById(toBlur)
  if (!el) return
  el.style.filter = 'none'
}

type ButtonProps = {
  size: 'sm' | 'md' | 'lg',
  variant: 'primary' | 'secondary-light' | 'secondary-dark' | 'ghost',
  layout: 'icon-only' | 'text-only' | 'text-with-icon',
}

export const getButtonClasses = (props: ButtonProps, more?: string) => {
  return classNames(
    'general-button',
    `-size-${props.size}`,
    `-layout-${props.layout}`,
    `-variant-${props.variant}`,
    more
  )
}
