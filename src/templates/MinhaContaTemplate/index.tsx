'use client'

import useLocalStorage from '@/hooks/useLocalStorage'
import * as S from './styles'
import { useContext, useEffect, useState } from 'react'
import { User } from '@/types/user'
import Button from '@/components/Button'
import { LoginContext } from '@/contexts/login'
import { ProductsContext } from '@/contexts/products'
import { useRouter } from 'next/navigation'

const MinhaContaTemplate = () => {
  const router = useRouter()
  const [userStorage] = useLocalStorage('user', '')
  const [user, setUser] = useState<User>()
  const { setLogin } = useContext(LoginContext)

  const { setFavoritesProducts } = useContext(ProductsContext)

  useEffect(() => {
    setUser(JSON.parse(userStorage))
  }, [userStorage])

  const logout = () => {
    setLogin({ isLogged: false })
    setFavoritesProducts([])
    router.push('/')
  }
  return (
    <S.Container>
      <S.Title>Minha Conta</S.Title>
      <S.UserInfo>
        <span>Nome</span>
        <p style={{ textTransform: 'capitalize' }}>{user?.name}</p>

        <span>Email</span>
        <p>{user?.email}</p>

        <span>Telefone</span>
        <p>{user?.phone}</p>

        <S.ButtonWrapper>
          <Button theme="secondary" onClick={() => router.push('/')}>
            Ver produtos
          </Button>
          <Button theme="secondary" onClick={logout}>
            Sair
          </Button>
        </S.ButtonWrapper>
      </S.UserInfo>
    </S.Container>
  )
}

export default MinhaContaTemplate
