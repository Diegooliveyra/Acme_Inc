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
    padding-top: 8rem;
    width: 100%;
    height: 100%;
    padding: 12rem ${theme.spacings.xsmall};
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
export const JsonContent = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    font-size: ${theme.font.sizes.button};
    font-weight: ${theme.font.normal};
    background-color: ${theme.colors.purple.light};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
  `}
`
