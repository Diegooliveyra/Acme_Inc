'use client'

import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

export const HeaderContainer = styled.header`
  ${() => css`
    background-color: ${theme.colors?.black.light};
    padding: ${theme.spacings.small};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${theme.layers.base};
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    cursor: pointer;

    span {
      color: ${theme.colors?.purple.light};
    }
  `}
`

export const HeaderContent = styled.div`
  ${() => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    background-color: ${theme.colors?.black.light};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const HeaderActions = styled.div`
  ${() => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
  `}
`

export const HeaderIcon = styled.div`
  ${() => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid ${theme.colors.gray.dark};
    border-radius: ${theme.border.radius};
    transition: all 0.4s ease;
    position: relative;

    span {
      position: absolute;
      top: -6px;
      right: -6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${theme.colors.purple.light};
      color: ${theme.colors.white};
    }

    &:hover {
      background-color: ${theme.colors.purple.dark};
    }
  `}
`

export const WrapperUser = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    h2 {
      text-transform: capitalize;
    }

    button {
      font-size: ${theme.font.sizes.caption};
      border: none;
      background-color: transparent;
      color: ${theme.colors.white};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const WrapperCards = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    overflow-y: auto;
    max-height: 80vh;
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
export const WrapperPrice = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;

    padding: ${theme.spacings.xsmall};
    width: 100%;
    border-bottom: 1px solid ${theme.colors.gray.medium};

    h2 {
      font-size: ${theme.font.sizes.h2};
    }

    p {
      font-size: ${theme.font.sizes.body};
    }
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
      font-size: ${theme.font.sizes.body};
    }
  `}
`
