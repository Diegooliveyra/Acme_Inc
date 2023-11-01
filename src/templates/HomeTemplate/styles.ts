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
    padding: ${theme.spacings.xsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    animation: ${toRight} 0.4s ease-in-out;
  `}
`

export const SearchWrapper = styled.main`
  ${() => css`
    display: flex;
    align-items: end;
    animation: ${toRight} 0.4s ease-in-out;
    justify-content: space-between;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.xsmall};
  `}
`

export const CardWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${theme.spacings.xxsmall};
    max-width: ${theme.grid.container};
  `}
`

export const NotFound = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;

    p {
      font-size: ${theme.font.sizes.h1};
    }
  `}
`
