'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const HeaderContainer = styled.header`
  ${() => css`
    background-color: ${theme.colors?.black.light};
    padding: ${theme.spacings.small};
    position: relative;
  `}
`;

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    cursor: pointer;

    span {
      color: ${theme.colors?.purple.light};
    }
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    background-color: ${theme.colors?.black.light};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const HeaderActions = styled.div`
  ${() => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
  `}
`;

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

    &:hover {
      background-color: ${theme.colors.purple.dark};
    }
  `}
`;
