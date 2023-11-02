'use client'

import { IProducto, IProductoDTO } from '@/types/product'
import { ReactNode, createContext, useState } from 'react'

interface IProductsContext {
  contextProducts: IProductoDTO[]
  setProducts: React.Dispatch<React.SetStateAction<IProducto[]>>
  favoritesProducts: IProductoDTO[]
  setFavoritesProducts: React.Dispatch<React.SetStateAction<IProducto[]>>
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showFavorites: boolean
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext)

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [contextProducts, setProducts] = useState<IProducto[]>([])
  const [favoritesProducts, setFavoritesProducts] = useState<IProducto[]>([])
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showFavorites, setShowFavorites] = useState<boolean>(false)

  return (
    <ProductsContext.Provider
      value={{
        contextProducts,
        setProducts,
        favoritesProducts,
        setFavoritesProducts,
        showCart,
        setShowCart,
        showFavorites,
        setShowFavorites,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
