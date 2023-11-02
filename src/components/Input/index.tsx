import { InputHTMLAttributes, useEffect, useState } from 'react'

import * as S from './styles'
import maskPhone2 from '@/utils/masks/newPhoneMask'

export type isDefaultType = 'default' | 'small'

export type MasksTypes = 'phone'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  label: string
  mask?: MasksTypes
  placeholder?: string
  required?: boolean
  type?: 'number' | 'text' | 'password' | 'date' | 'email' | 'tel'
  value?: string
  initialValue?: any
  handleOnChange?: (value: any) => any
  handleOnFocus?: () => any
  handleOnBlur?: () => any
}

const Input = ({
  placeholder = '',
  type = 'text',
  value = '',
  label,
  handleOnChange,
  handleOnBlur,
  handleOnFocus,
  required,
  className,
  disabled = false,
  initialValue,
  mask,
  ...rest
}: InputProps) => {
  const [valueState, setValue] = useState(initialValue !== '' ? initialValue : value)

  const changeMask = (value: string) => {
    let valueWithMask = value

    if (mask === 'phone') {
      valueWithMask = maskPhone2(value)
    }

    return valueWithMask
  }

  const changeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value
    value = changeMask(value)
    setValue(value)
    !!handleOnChange && handleOnChange!(value)
  }

  useEffect(() => {
    if (initialValue !== undefined && initialValue !== '') {
      setValue(initialValue)
    } else {
      setValue(value)
    }
  }, [initialValue, value])

  return (
    <S.Container>
      <S.Label htmlFor="">{label}</S.Label>
      <S.Wrapper className={className} disabled={disabled}>
        <S.Input
          value={valueState}
          placeholder={placeholder}
          onChange={changeInputValue}
          onWheel={(event) => event.currentTarget.blur()}
          type={type}
          disabled={disabled}
          {...rest}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default Input
