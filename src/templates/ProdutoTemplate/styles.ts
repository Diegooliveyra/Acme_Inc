'use client';

import styled, { css, keyframes } from 'styled-components';
import theme from '@/styles/theme';

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
  `;

export const Container = styled.main`
  ${() => css`
    padding: ${theme.spacings.xsmall};
    gap: ${theme.spacings.medium};
    max-width: ${theme.grid.container};
    margin: ${theme.spacings.large} auto;
    display: flex;
    justify-content: space-between;

    animation: ${toRight} 0.4s ease-in-out;
    flex-wrap: wrap;
  `}
`;

export const ImageContainer = styled.div`
  ${() => css`
    flex: 1;

    border: 1px solid ${theme.colors.gray.medium};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;
  `}
`;

export const InfoContainer = styled.div`
  ${() => css`
    flex: 1;
    max-width: 600px;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.black.light};
    border-radius: ${theme.border.radius};

    position: relative;

    p {
      font-size: ${theme.font.sizes.button};
      font-weight: ${theme.font.normal};
      line-height: ${theme.spacings.medium};
      color: ${theme.colors.purple.light};
    }
  `}
`;

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    font-weight: ${theme.font.normal};
  `}
`;

type FavoriteButtonProps = {
  isFavorite: boolean;
};

export const FavoriteButton = styled.div<FavoriteButtonProps>`
  ${({ isFavorite }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.xsmall};
    cursor: pointer;

    svg path {
      fill: ${isFavorite ? theme.colors.purple.light : theme.colors.white};
    }

    svg {
      transition: all 0.4s ease;
      transform: scale(1.1);
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  `}
`;

export const ProductPrice = styled.div`
  ${() => css`
    margin-top: ${theme.spacings.small};
    h2 {
      font-size: ${theme.font.sizes.h1};
      font-weight: ${theme.font.semiBold};
    }
  `}
`;

export const AmountProducts = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};

    span {
      font-size: ${theme.font.sizes.h2};
      font-weight: ${theme.font.semiBold};
    }

    button {
      cursor: pointer;
      font-size: ${theme.font.sizes.h2};
      background-color: transparent;
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.gray.dark};
      border-radius: ${theme.border.radius};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
    }
  `}
`;

export const DescriptionProduct = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};

    h2 {
      font-size: ${theme.font.sizes.h2};
      font-weight: ${theme.font.semiBold};
    }

    p {
      font-size: ${theme.font.sizes.body};
      line-height: ${theme.spacings.small};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.gray.medium};
    }
  `}
`;

export const Button = styled.button`
  ${() => css`
    margin-top: ${theme.spacings.xsmall};
    cursor: pointer;
    font-size: ${theme.font.sizes.h2};
    background-color: ${theme.colors.purple.light};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray.dark};
    border-radius: ${theme.border.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;
