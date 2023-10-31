'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.main`
  ${() => css`
    padding: ${theme.spacings.xsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
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
