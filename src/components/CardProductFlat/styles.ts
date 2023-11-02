'use client'

import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 80px 1fr 30px;
    width: 100%;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};

    cursor: pointer;
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.black.light};

    &:hover {
      transition: all 0.6s ease;
      border-color: ${theme.colors.purple.light};
      img {
        transition: all 0.6s ease;
        filter: grayscale();
      }
    }
  `}
`

export const CardImage = styled.div`
  ${() => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid ${theme.colors.gray.medium};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;
  `}
`

export const CardInfo = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    p {
      font-size: ${theme.font.sizes.body};
      line-height: ${theme.spacings.small};
      font-weight: ${theme.font.normal};
    }

    h3 {
      font-size: ${theme.font.sizes.h2};
      line-height: ${theme.spacings.medium};
    }
  `}
`

export const RemoveButton = styled.button`
  ${() => css`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `}
`
