'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.header`
  ${() => css`
    padding: ${theme.spacings.xsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
