'use client'

import { ReactSVG } from 'react-svg'
import * as S from './styles'

import { ReactNode, useState } from 'react'

type SidebarProps = {
  children: ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ children, isOpen = false, setIsOpen }: SidebarProps) => {
  return (
    <S.Container>
      <S.Content $isOpen={isOpen} className={isOpen ? 'active' : ''}>
        <span onClick={() => setIsOpen(false)}>
          <ReactSVG src="/assets/icons/close.svg" />
          Fechar
        </span>
        {children}
      </S.Content>
      <div id={isOpen ? 'overlay' : 'none'} onClick={() => setIsOpen(!isOpen)}></div>
    </S.Container>
  )
}

export default Sidebar
