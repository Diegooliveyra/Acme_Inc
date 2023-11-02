'use client'

import theme from '@/styles/theme'
import styled, { css } from 'styled-components'
import { ThemeButton } from '.'

const themeModifier = {
  primary: () => css`
    background-color: ${theme.colors.purple.light};
    color: ${theme.colors.white};
    border: 1px solid transparent;

    &:hover {
      background-color: ${theme.colors.purple.dark};
    }
  `,
  secondary: () => css`
    background-color: transparent;
    color: ${theme.colors.purple.light};
    border: 1px solid ${theme.colors.purple.light};

    &:hover {
      background-color: ${theme.colors.purple.dark};
      color: ${theme.colors.white};
      border: 1px solid transparent;
    }
  `,
}

type ContainerProps = {
  disabled: boolean
  themeBtn: ThemeButton
}

export const Container = styled.button<ContainerProps>`
  ${({ disabled, themeBtn }) => css`
    font-size: ${theme.font.sizes.body};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};

    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    width: 100%;
    transition: all 0.4s ease-in-out;

    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '.3' : '1'};

    ${theme && themeModifier[themeBtn]}
  `}
`
