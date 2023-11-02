'use client'

import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    cursor: pointer;

    span {
      color: ${theme.colors?.purple.light};
    }
  `}
`

export const WrapperCartCards = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    overflow-y: auto;
    max-height: 40vh;
    margin-bottom: ${theme.spacings.large};
  `}
`
