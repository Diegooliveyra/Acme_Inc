import { InputHTMLAttributes, useEffect, useState } from 'react';

import * as S from './styles';

export type isDefaultType = 'default' | 'small';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'number' | 'text' | 'password' | 'date' | 'email' | 'tel';
  value?: string;
  initialValue?: any;
  handleOnChange?: (value: any) => any;
  handleOnFocus?: () => any;
  handleOnBlur?: () => any;
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

  ...rest
}: InputProps) => {
  const [valueState, setValue] = useState(
    initialValue !== '' ? initialValue : value
  );

  const changeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    setValue(value);
    !!handleOnChange && handleOnChange!(value);
  };

  useEffect(() => {
    if (initialValue !== undefined && initialValue !== '') {
      setValue(initialValue);
    } else {
      setValue(value);
    }
  }, [initialValue, value]);

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
  );
};

export default Input;
