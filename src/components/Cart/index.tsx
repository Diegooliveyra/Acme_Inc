import { useContext, useState } from 'react'
import CardProductFlat from '../CardProductFlat'
import * as S from './styles'
import { CartContext } from '@/contexts/cart'
import { useRouter } from 'next/navigation'

const Cart = () => {
  const router = useRouter()
  const { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity, products } =
    useContext(CartContext)

  return (
    <>
      <S.Title style={{ margin: '16px 0' }}> 🛒 Carrinho</S.Title>
      <S.WrapperCartCards>
        {products?.map((product) => (
          <CardProductFlat
            onClick={() => router.push(`/produto/${product.id}`)}
            handleDecrease={() => decreaseProductQuantity(product.id)}
            handleIncrease={() => increaseProductQuantity(product.id)}
            quantity={product.quantity}
            key={product.id}
            data={product}
            handleRemove={() => removeProductFromCart(product.id)}
          />
        ))}
      </S.WrapperCartCards>
    </>
  )
}

export default Cart