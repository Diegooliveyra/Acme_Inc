/* eslint-disable react-hooks/exhaustive-deps */
import { InputHTMLAttributes, useEffect, useState } from 'react';

import { ReactSVG } from 'react-svg';

import * as S from './styles';

export type isDefaultType = 'default' | 'small';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  iconLeft?: any;
  placeholder?: string;
  required?: boolean;
  type?: 'number' | 'text' | 'password' | 'date' | 'email' | 'month';
  onClickInIconRight?: boolean;
  value?: string;
  initialValue?: any;
  handleOnChange?: (value: any) => any;
  handleOnFocus?: () => any;
  handleOnBlur?: () => any;
  iconRight?: any;
  onClickIconRight?: () => void;
  onClickIconLeft?: () => void;
}

const Input = ({
  placeholder = '',
  type = 'text',
  iconLeft = '',

  value = '',
  handleOnChange,
  handleOnBlur,
  handleOnFocus,
  required,
  className,
  iconRight = '',
  onClickIconLeft,
  onClickIconRight,
  disabled = false,
  initialValue,

  ...rest
}: InputProps) => {
  const [valueState, setValue] = useState(
    initialValue !== '' ? initialValue : value
  );

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [typeState, setType] = useState(type);
  const [isFocus, setIsFocus] = useState(false);
  const [isFill, setIsFill] = useState(false);

  const changeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    setValue(value);
    !!handleOnChange && handleOnChange!(value);
  };

  function onFocus() {
    setIsFocus(true);
    !!handleOnFocus && handleOnFocus();
  }

  function onBlur() {
    setIsFocus(false);
    setIsFill(!!valueState);
    !!handleOnBlur && handleOnBlur();
  }

  function onClickVisibilit() {
    const val = !isShowPassword;
    setIsShowPassword(val);
    if (val) return setType(type);
    return setType('password');
  }

  function clickedIconRight() {
    !!onClickIconRight && onClickIconRight();
  }

  useEffect(() => {
    if (initialValue !== undefined && initialValue !== '') {
      setValue(initialValue);

      onBlur();
    } else {
      setValue(value);
    }
  }, [initialValue, value]);

  return (
    <>
      <S.Wrapper
        isFocus={isFocus}
        isFill={true}
        isIconLeft={!!iconLeft}
        className={className}
        disabled={disabled}
      >
        <S.WrapperLeft>
          {!!iconLeft && (
            <S.IconLeft onClick={onClickIconLeft}>
              <ReactSVG src={iconLeft ? iconLeft : ''} wrapper="span" />
            </S.IconLeft>
          )}

          <S.Input
            value={valueState}
            placeholder={placeholder}
            onChange={changeInputValue}
            onFocus={onFocus}
            onBlur={onBlur}
            onWheel={(event) => event.currentTarget.blur()}
            type={typeState}
            disabled={disabled}
            {...rest}
          />
        </S.WrapperLeft>

        {!!iconRight && (
          <S.ButtonIconRight type="button" onClick={clickedIconRight}>
            <ReactSVG src={iconRight} wrapper="span" />
          </S.ButtonIconRight>
        )}
      </S.Wrapper>
    </>
  );
};

export default Input;
