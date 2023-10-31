import { IProductoDTO } from '../types/product';

export const ProductsService = async (): Promise<IProductoDTO[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`, {
    cache: 'no-store',
  });
  return await response.json();
};
