'use client';

import * as S from './styles';

import { ReactNode, useState } from 'react';

type SidebarProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ children, isOpen = false, setIsOpen }: SidebarProps) => {
  return (
    <S.Content $isOpen={isOpen}>
      <button onClick={() => setIsOpen(false)}>Fechar</button>
      {children}
    </S.Content>
  );
};

export default Sidebar;
