'use client'

import { CartContext, CartProduct } from '@/contexts/cart'
import { useContext, useEffect, useState } from 'react'

import { User } from '@/types/user'

import useLocalStorage from '@/hooks/useLocalStorage'

import loadable from '@loadable/component'

import * as S from './styles'

type JsonType = {
  cart: CartProduct[]
  user: User
  totalValue: number
}

const JsonTemplate = () => {
  const ReactJson = loadable(() => import('react-json-view'))

  const { total, products } = useContext(CartContext)
  const [json, setJson] = useState<JsonType>({} as JsonType)
  const [user] = useLocalStorage('user', '')

  useEffect(() => {
    setJson({
      cart: products,
      user: JSON.parse(user),
      totalValue: total,
    })
  }, [products, total, user])

  return (
    <S.Container>
      <S.Title>Obrigado pela compra 😎</S.Title>

      <S.JsonContent>
        <ReactJson
          enableClipboard={false}
          defaultValue={false}
          displayObjectSize={false}
          displayDataTypes={false}
          src={json}
          theme="threezerotwofour"
        />
      </S.JsonContent>
    </S.Container>
  )
}

export default JsonTemplate
