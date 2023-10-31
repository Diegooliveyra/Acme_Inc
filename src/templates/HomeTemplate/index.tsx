/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import CardProduct, { CardProps } from '@/components/CardProduct';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ProductsContext } from '@/contexts/products';
import { IProductoDTO } from '@/types/product';

import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';

import * as S from './styles';

type HomeTemplateProps = {
  products: IProductoDTO[];
};

const HomeTemplate = ({ products }: HomeTemplateProps) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>();
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const { setProducts, contextProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (!contextProducts?.length) setProducts(products);
  }, [products]);

  const handleSearch = (value: string) => {
    const filteredProducts = products.filter((product: IProductoDTO) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <S.Container>
      <S.SearchWrapper>
        <Input
          placeholder="Buscar por nome"
          value={search}
          handleOnChange={(value) => {
            setSearch(value);
            handleSearch(value);
          }}
        />
        <Checkbox
          text="Favoritos"
          checked={showFavorites}
          handleToggle={() => setShowFavorites(!showFavorites)}
        />
      </S.SearchWrapper>

      {contextProducts?.length ? (
        <S.CardWrapper>
          {contextProducts?.map((product) => (
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
      ) : (
        <S.NotFound>
          {search?.length ? <p>Nenhum produto encontrado 😱</p> : null}
        </S.NotFound>
      )}
    </S.Container>
  );
};

export default HomeTemplate;
