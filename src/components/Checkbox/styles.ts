'use client';

import styled from 'styled-components';
import theme from '../../styles/theme';

export const CheckboxContainer = styled.div`
  margin-right: 19px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${theme.spacings.xsmall};

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 15px;
  }

  svg path {
    fill: ${theme.colors.purple.light};
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 16px;
  color: ${theme.colors.gray.medium};
`;
