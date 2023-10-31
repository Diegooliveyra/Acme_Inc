'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  ${() => css`
    padding: ${theme.spacings.xxsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
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
`;

export const CardImage = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    width: 252px;
    height: 252px;
    border: 1px solid ${theme.colors.gray.medium};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;

    /* &:hover {
      transition: all 0.6s ease;
      border-color: ${theme.colors.purple.light};
      img {
        transition: all 0.6s ease;
        filter: grayscale();
      }
    } */
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
    z-index: ${theme.layers.base};

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
