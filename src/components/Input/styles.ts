'use client';

import styled, { css, DefaultTheme } from 'styled-components';

import theme from '../../styles/theme';

type WrapperProps = {
  disabled?: boolean;
};

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${() => css`
    font-size: ${theme.font.sizes.button};
    color: ${theme.colors.gray.medium};
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.normal};
  `}
`;

export const Input = styled.input`
  position: relative;
  border: none;
  background: transparent;
  color: ${theme.colors.white};
  height: 100%;
  width: 100%;
  outline: none;
  font-size: ${theme.font.sizes.body};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled }) => css`
    width: 100%;
    position: relative;
    height: 5.6rem;
    padding: 0 1.6rem;
    border: 1px solid ${theme.colors.black.light};
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    opacity: ${disabled ? '0.6' : '1'};
    border: 1px solid ${theme.colors.purple.light};

    ${Input} {
      border: none;
    }
  `}
`;
