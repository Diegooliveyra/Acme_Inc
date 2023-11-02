'use client'

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite'
import 'react-json-view-lite/dist/index.css'
import * as S from './styles'
import { CartContext, CartProduct } from '@/contexts/cart'
import { useContext, useEffect, useState } from 'react'
import { IProductoDTO } from '@/types/product'
import { User } from '@/types/user'
import { LoginContext } from '@/contexts/login'
import useLocalStorage from '@/hooks/useLocalStorage'

type JsonType = {
  cart: CartProduct[]
  user: User
  totalValue: number
}

const JsonTemplate = () => {
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
      <S.Title>Obrigado pela compra</S.Title>

      <div>
        <JsonView data={json} shouldExpandNode={allExpanded} style={{ ...darkStyles }} />
      </div>
    </S.Container>
  )
}

export default JsonTemplate
