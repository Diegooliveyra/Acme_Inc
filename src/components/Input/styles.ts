'use client';

import styled, { css, DefaultTheme } from 'styled-components';

import theme from '../../styles/theme';

type WrapperProps = {
  isFill: boolean;
  isFocus: boolean;
  isIconLeft: boolean;

  disabled?: boolean;
};

// COMPONENTES
export const Label = styled.label`
  ${() => css`
    position: absolute;
    left: 8px;
    top: calc(50% - 10px);
    color: #aaa;

    font-size: 1.6rem;
    color: ${theme.colors.white};
    font-weight: 400;
    padding: 0 0.8rem;

    transition: all 0.1s ease;

    pointer-events: none;

    span {
      color: red;
    }
  `}
`;

export const Input = styled.input`
  position: relative;
  border: none;
  background: transparent;
  color: #fff;
  transition: all 0.2s ease;

  height: 100%;
  width: 100%;

  outline: none;

  font-size: 1.6rem;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IconLeft = styled.div`
  ${() => css`
    margin-right: 0.8rem;
    margin-top: 6px;

    svg path {
      fill: ${theme.colors.purple.light};
    }
  `}
`;

export const ButtonPassword = styled.div`
  ${() => css`
    border: none;
    background: transparent;
    margin: 0;
    padding: 0;
    outline: none;
    margin-top: 2px;

    margin-left: 0.8rem;

    svg path {
      fill: ${theme.colors.purple.light};
    }
  `}
`;

export const ButtonIconRight = styled.button`
  ${() => css`
    border: none;
    background: transparent;

    cursor: pointer;

    margin: 0;
    padding: 0;
    outline: none;
    margin-top: 2px;

    margin-left: 0.8rem;

    svg path {
      fill: ${theme.colors.purple.light};
    }
  `}
`;

export const WrapperLeft = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ isFill, isFocus, isIconLeft, disabled }) => css`
    width: 100%;
    position: relative;
   
    height: 5.6rem;

    padding: 0 1.6rem;
    border: 1px solid ${theme.colors.black.light};
    border-radius: 0.4rem;

    display: flex;
    flex-direction: row !important;
    align-items: center;

    background: transparent
    opacity: ${disabled ? '0.6' : '1'};
    .loading {
      width: 30px;
    }

    ${
      isIconLeft &&
      css`
        ${Label} {
          left: 40px;
        }
      `
    }

    ${
      isFill &&
      css`
        border: 1px solid ${theme.colors.purple.light};

        ${Input} {
          border: none;
        }

        ${Label} {
          top: -10px;
          left: 8px;
          font-size: 1.4rem;

          z-index: 1;

          padding: 0 0.4rem;

          background: ${theme.colors.black.dark};

          color: ${theme.colors.purple.light};
        }
      `
    }

    ${
      isFocus &&
      css`
        border: 2px solid ${theme.colors.purple.light} !important;

        ${Input} {
          border: none;
        }

        ${Label} {
          top: -10px;
          left: 8px;
          font-size: 1.4rem;

          z-index: 1;

          padding: 0 0.4rem;

          color: ${theme.colors.purple.light} !important;
        }
      `
    }
  `}
`;
