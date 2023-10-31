/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import CardProduct, { CardProps } from '@/components/CardProduct';
import { IProductoDTO } from '@/types/product';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '@/contexts/products';

type HomeTemplateProps = {
  products: IProductoDTO[];
};

const HomeTemplate = ({ products }: HomeTemplateProps) => {
  const { setProducts, contextProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (!contextProducts?.length) setProducts(products);
  }, [products]);

  const router = useRouter();
  return (
    <S.Container>
      <S.CardWrapper>
        {products?.map((product) => (
          <CardProduct
            key={product.title}
            title={product.title}
            url_image={product.url_image}
            value={product.value}
            handleFavorite={(v) => console.log(v)}
            onClick={() => router.push(`/produto/${product.id}`)}
          />
        ))}
      </S.CardWrapper>
    </S.Container>
  );
};

export default HomeTemplate;
