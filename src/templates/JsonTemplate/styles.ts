'use client'

import styled, { css, keyframes } from 'styled-components'
import theme from '@/styles/theme'

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
  `

export const Container = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: calc(100vh - 88px);
    padding: ${theme.spacings.xlarge};
    animation: ${toRight} 0.4s ease-in-out;
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    font-weight: ${theme.font.semiBold};
    line-height: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
`
