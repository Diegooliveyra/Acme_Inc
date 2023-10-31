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
    max-width: ${theme.grid.container};
    margin: 0 auto;
    animation: ${toRight} 0.4s ease-in-out;
  `}
`;

export const CardWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${theme.spacings.xxsmall};
    max-width: ${theme.grid.container};
  `}
`;
