'use client';

import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '@/contexts/products';
import { IProductoDTO } from '@/types/product';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import { moneyFormat } from '@/utils/moneyFormat';

type ProdutoTemplateProps = {
  id: number;
};

const ProdutoTemplate = ({ id }: ProdutoTemplateProps) => {
  const router = useRouter();
  const [product, setProduct] = useState<IProductoDTO>();
  const { contextProducts } = useContext(ProductsContext);

  useEffect(() => {
    const productFilterd = contextProducts.reduce((acc, product) => {
      if (product?.id === id) {
        return {
          ...acc,
          ...product,
        };
      }
      return acc;
    }, {});

    if (productFilterd && Object.keys(productFilterd).length === 0) {
      router.push('/');
    }

    setProduct(productFilterd as IProductoDTO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextProducts, id]);

  return (
    <S.Container>
      {product ? (
        <>
          <S.ImageContainer>
            <Image
              src={product?.url_image}
              alt={product?.title}
              fill
              objectFit="cover"
            />
          </S.ImageContainer>
          <S.InfoContainer>
            <S.FavoriteButton
              isFavorite={true}
              onClick={(e) => {
                console.log(e);
              }}
            >
              <ReactSVG
                src={'/assets/icons/heart.svg'}
                role={'Icon'}
                wrapper="span"
              />
            </S.FavoriteButton>
            <S.Title>{product.title}</S.Title>
            <p>Disponível em estoque </p>

            <S.ProductPrice>
              <h2>{moneyFormat(product.value)}</h2>
            </S.ProductPrice>

            <S.AmountProducts>
              <button> {'-'} </button>
              <span>{1}</span>
              <button> {'+'} </button>
            </S.AmountProducts>

            <S.DescriptionProduct>
              <h2>Descrição</h2>
              <p>{product.description}</p>
            </S.DescriptionProduct>

            <S.Button>Adcionar ao carrinho</S.Button>
          </S.InfoContainer>
        </>
      ) : null}
    </S.Container>
  );
};

export default ProdutoTemplate;
