'use client'

import { ReactNode } from 'react'
import * as S from './styles'

export type ThemeButton = 'primary' | 'secondary'

type ButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode
  disabled?: boolean
  theme?: ThemeButton
}
const Button = ({ children, disabled = false, theme = 'primary', ...rest }: ButtonProps) => {
  return (
    <S.Container themeBtn={theme} disabled={disabled} {...rest}>
      {children}
    </S.Container>
  )
}

export default Button
