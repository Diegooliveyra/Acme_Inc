'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  ${() => css`
    padding: ${theme.spacings.xsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    cursor: pointer;
  `}
`;

export const CardImage = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    width: 202px;
    height: 202px;
    border: 1px solid ${theme.colors.gray.medium};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;
  `}
`;

type FavoriteButtonProps = {
  isFavorite: boolean;
};

export const FavoriteButton = styled.div<FavoriteButtonProps>`
  ${({ isFavorite }) => css`
    position: absolute;
    right: ${theme.spacings.xsmall};
    top: ${theme.spacings.xsmall};

    svg path {
      fill: ${isFavorite ? theme.colors.purple.light : theme.colors.white};
    }

    svg {
      transform: scale(1.1);
    }

    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const CardInfo = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding-top: ${theme.spacings.xxsmall};

    p {
      font-size: ${theme.font.sizes.button};
      line-height: ${theme.spacings.small};
      font-weight: ${theme.font.normal};
    }

    h3 {
      font-size: ${theme.font.sizes.h2};
      line-height: ${theme.spacings.medium};
    }
  `}
`;
