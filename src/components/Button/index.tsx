'use client';

import { ReactNode } from 'react';
import * as S from './styles';

type ButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode;
  disabled?: boolean;
};
const Button = ({ children, disabled, ...rest }: ButtonProps) => {
  return (
    <S.Container disabled={disabled} {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
