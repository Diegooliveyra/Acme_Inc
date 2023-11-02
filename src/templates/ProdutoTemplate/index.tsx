'use client'

import { useContext, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { ReactSVG } from 'react-svg'
import Image from 'next/image'

import { ProductsContext } from '@/contexts/products'
import { LoginContext } from '@/contexts/login'
import { CartContext } from '@/contexts/cart'

import { moneyFormat } from '@/utils/moneyFormat'
import { IProductoDTO } from '@/types/product'

import Button from '@/components/Button'

import * as S from './styles'

type ProdutoTemplateProps = {
  id: number
}

const ProdutoTemplate = ({ id }: ProdutoTemplateProps) => {
  const router = useRouter()
  const [product, setProduct] = useState<IProductoDTO>({} as IProductoDTO)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [quantity, setQuantity] = useState(1)
  const { contextProducts, favoritesProducts, setFavoritesProducts, setShowCart } =
    useContext(ProductsContext)
  const { login } = useContext(LoginContext)
  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })
    setShowCart(true)
    toast(`Adicionado ${quantity} ${quantity > 1 ? 'itens' : 'item'} ao carrinho`)
  }

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
              {quantity > 1 && <span>Total: {moneyFormat(product.value * quantity)} </span>}
            </S.ProductPrice>

            <S.AmountProducts>
              <button onClick={handleDecreaseQuantityClick}> {'-'} </button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseQuantityClick}> {'+'} </button>
            </S.AmountProducts>

            <S.DescriptionProduct>
              <h2>Descrição</h2>
              <p>{product.description}</p>
            </S.DescriptionProduct>

            <Button onClick={handleAddToCartClick}>Adcionar ao carrinho</Button>
          </S.InfoContainer>
        </>
      ) : null}
    </S.Container>
  )
}

export default ProdutoTemplate
