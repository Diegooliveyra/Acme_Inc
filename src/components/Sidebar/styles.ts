'use client'

import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

export const Container = styled.header`
  ${() => css`
    position: relative;

    #overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: ${theme.layers.overlay};
      background-color: rgba(0, 0, 0, 0.8);
    }
  `}
`

type SideBarProps = {
  $isOpen: boolean
}

export const Content = styled.header<SideBarProps>`
  ${({ $isOpen }) => css`
    width: 400px;
    height: 100vh;
    background-color: ${theme.colors?.black.dark};
    padding: ${theme.spacings.small};
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${theme.layers.modal};
    transition: transform 0.4s ease;

    transform: ${$isOpen ? 'translateX(0)' : 'translateX(400px)'};

    &.active {
      pointer-events: all;
    }

    span {
      font-size: ${theme.font.sizes.body};
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};
      background-color: transparent;
      border: none;
      color: ${theme.colors.white};
      cursor: pointer;
    }
  `}
`
