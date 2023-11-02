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
    max-width: 700px;
    margin: 0 auto;

    padding-top: 8rem;
    width: 100%;
    height: 100%;
    padding: 12rem ${theme.spacings.xlarge};
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
export const UserInfo = styled.div`
  ${() => css`
    background-color: ${theme.colors.black.light};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};

    span {
      font-size: ${theme.font.sizes.body};
      font-weight: ${theme.font.semiBold};
      line-height: ${theme.spacings.small};
    }

    p {
      font-size: ${theme.font.sizes.button};
      font-weight: ${theme.font.normal};
      line-height: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
export const ButtonWrapper = styled.h1`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.small};

    button {
      max-width: 300px;
    }
  `}
`
