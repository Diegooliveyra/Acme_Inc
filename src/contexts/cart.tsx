'use client'

import { IProductoDTO } from '@/types/product'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

export interface CartProduct extends IProductoDTO {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  total: number
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: number) => void
  increaseProductQuantity: (productId: number) => void
  removeProductFromCart: (productId: number) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  total: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
})

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    localStorage.setItem('@fsw-store/cart-products', JSON.stringify(products))
  }, [products])

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.value * product.quantity
    }, 0)
  }, [products])

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some((cartProduct) => cartProduct.id === product.id)

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return cartProduct
        }),
      )

      return
    }

    setProducts((prev) => [...prev, product])
  }

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const removeProductFromCart = (productId: number) => {
    setProducts((prev) => prev.filter((cartProduct) => cartProduct.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
