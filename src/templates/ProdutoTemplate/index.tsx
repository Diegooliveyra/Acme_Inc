'use client'

import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { ProductsContext } from '@/contexts/products'
import { LoginContext } from '@/contexts/login'

import { moneyFormat } from '@/utils/moneyFormat'
import { IProductoDTO } from '@/types/product'

import { ReactSVG } from 'react-svg'
import * as S from './styles'
import Button from '@/components/Button'

type ProdutoTemplateProps = {
  id: number
}

const ProdutoTemplate = ({ id }: ProdutoTemplateProps) => {
  const router = useRouter()
  const [product, setProduct] = useState<IProductoDTO>({} as IProductoDTO)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { contextProducts, favoritesProducts, setFavoritesProducts } = useContext(ProductsContext)
  const { login } = useContext(LoginContext)

  useEffect(() => {
    const productFilterd = contextProducts.reduce((acc, product) => {
      if (product?.id === id) {
        return {
          ...acc,
          ...product,
        }
      }
      return acc
    }, {})

    if (productFilterd && Object.keys(productFilterd).length === 0) {
      router.push('/')
    }

    setProduct(productFilterd as IProductoDTO)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextProducts, id])

  useEffect(() => {
    setIsFavorite(favoritesProducts.some((p) => p.id === product.id))
  }, [favoritesProducts, product])

  const handleFavorite = (checked: boolean) => {
    const productsFavorites = [...favoritesProducts]

    if (checked) {
      productsFavorites.push(product)
      setFavoritesProducts(productsFavorites)
    } else {
      setFavoritesProducts(productsFavorites.filter((pr) => pr.id !== product.id))
    }
  }

  return (
    <S.Container>
      {product ? (
        <>
          <S.ImageContainer>
            <Image src={product?.url_image} alt={product?.title} fill objectFit="cover" />
          </S.ImageContainer>
          <S.InfoContainer>
            {login?.isLogged ? (
              <S.FavoriteButton
                isFavorite={favoritesProducts.some((p) => p.id === product.id)}
                onClick={(e) => {
                  e.stopPropagation()

                  handleFavorite(!isFavorite)
                  setIsFavorite(!isFavorite)
                }}
              >
                <ReactSVG src={'/assets/icons/heart.svg'} role={'Icon'} wrapper="span" />
              </S.FavoriteButton>
            ) : null}
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

            <Button>Adcionar ao carrinho</Button>
          </S.InfoContainer>
        </>
      ) : null}
    </S.Container>
  )
}

export default ProdutoTemplate
