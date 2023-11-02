'use client'

import theme from '@/styles/theme'
import styled, { css } from 'styled-components'

type ContainerProps = {
  disabled: boolean
}

export const Container = styled.button`
  ${({ disabled }) => css`
    font-size: ${theme.font.sizes.body};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.purple.light};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    width: 100%;
    transition: all 0.4s ease-in-out;

    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '.3' : '1'};

    &:hover {
      background-color: ${theme.colors.purple.dark};
    }
  `}
`
