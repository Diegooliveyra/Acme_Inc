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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 88px);
    animation: ${toRight} 0.4s ease-in-out;
  `}
`;

export const Title = styled.h1`
  ${() => css`
    font-size: ${theme.font.sizes.h1};
    font-weight: ${theme.font.semiBold};
    line-height: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    max-width: 350px;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.black.light};
    border-radius: ${theme.border.radius};

    p,
    a {
      font-size: ${theme.font.sizes.caption};
      font-weight: ${theme.font.normal};
      line-height: ${theme.spacings.small};
    }

    a {
      background-color: transparent;
      border: none;
      color: ${theme.colors.purple.light};
      cursor: pointer;
    }
  `}
`;
