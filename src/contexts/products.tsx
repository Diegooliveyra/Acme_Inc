'use client';

import { IProducto, IProductoDTO } from '@/types/product';
import { ReactNode, createContext, useState } from 'react';

interface IProductsContext {
  contextProducts: IProductoDTO[];
  setProducts: React.Dispatch<React.SetStateAction<IProducto[]>>;
  favoritesProducts: IProductoDTO[];
  setFavoritesProducts: React.Dispatch<React.SetStateAction<IProducto[]>>;
}

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [contextProducts, setProducts] = useState<IProducto[]>([]);
  const [favoritesProducts, setFavoritesProducts] = useState<IProducto[]>([]);

  return (
    <ProductsContext.Provider
      value={{
        contextProducts,
        setProducts,
        favoritesProducts,
        setFavoritesProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
