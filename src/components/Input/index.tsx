/* eslint-disable react-hooks/exhaustive-deps */
import { InputHTMLAttributes, useEffect, useState } from 'react';

import { ReactSVG } from 'react-svg';

import * as S from './styles';

export type isDefaultType = 'default' | 'small';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  iconLeft?: any;
  isDefault: isDefaultType;
  label?: string;
  required?: boolean;
  className?: string;
  loading?: string | boolean;
  type?: 'number' | 'text' | 'password' | 'date' | 'email' | 'month';
  iconPassword?: boolean;
  onClickInIconRight?: boolean;
  value?: string;
  maxLength?: number;
  initialValue?: any;
  handleOnChange?: (value: any) => any;
  handleOnFocus?: () => any;
  handleOnBlur?: () => any;
  iconRight?: any;
  onClickIconRight?: () => void;
  onClickIconLeft?: () => void;
  isSelect?: boolean;
}

const Input = ({
  label = 'placeholder',
  isDefault = 'default',
  type = 'text',
  iconLeft = '',
  loading,
  iconPassword = false,
  value = '',
  handleOnChange,
  handleOnBlur,
  handleOnFocus,
  required,
  className,
  iconRight = '',
  onClickIconLeft,
  onClickIconRight,
  isSelect,
  disabled = false,
  initialValue,
  maxLength,
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
    if (iconPassword) {
      setType('password');
    } else {
      setType(type);
    }
  }, [iconPassword]);

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
        onClick={isSelect ? clickedIconRight : () => {}}
      >
        <S.WrapperLeft>
          {!!iconLeft && (
            <S.IconLeft onClick={onClickIconLeft}>
              <ReactSVG src={iconLeft ? iconLeft : ''} wrapper="span" />
            </S.IconLeft>
          )}

          <S.Input
            value={valueState}
            placeholder={isDefault === 'small' ? label : ''}
            onChange={changeInputValue}
            onFocus={onFocus}
            onBlur={onBlur}
            onWheel={(event) => event.currentTarget.blur()}
            type={typeState}
            disabled={isSelect || disabled}
            maxLength={maxLength}
            {...rest}
          />
        </S.WrapperLeft>

        {isDefault === 'default' && (
          <S.Label>
            {label}

            {required && <span> *</span>}
          </S.Label>
        )}

        {iconPassword && (
          <S.ButtonPassword onClick={onClickVisibilit}>
            {isShowPassword ? (
              <ReactSVG
                src={'/assets/icons/mai-ic-visible-false.svg'}
                wrapper="span"
              />
            ) : (
              <ReactSVG
                src={'/assets/icons/mai-ic-visible-true.svg'}
                wrapper="span"
              />
            )}
          </S.ButtonPassword>
        )}

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
