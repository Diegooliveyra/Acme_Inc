import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import CardProductFlat from '../CardProductFlat'

import { ProductsContext } from '@/contexts/products'
import { CartContext } from '@/contexts/cart'

import * as S from './styles'

const Cart = () => {
  const router = useRouter()
  const { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity, products } =
    useContext(CartContext)

  const { setShowCart } = useContext(ProductsContext)

  return (
    <>
      <S.Title style={{ margin: '16px 0' }}> 🛒 Carrinho</S.Title>
      <S.WrapperCartCards>
        {products?.map((product) => (
          <CardProductFlat
            onClick={() => {
              setShowCart(false)
              router.push(`/produto/${product.id}`)
            }}
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
