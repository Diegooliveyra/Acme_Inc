/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import CardProduct, { CardProps } from '@/components/CardProduct'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { ProductsContext } from '@/contexts/products'
import { IProductoDTO } from '@/types/product'

import Input from '@/components/Input'
import Checkbox from '@/components/Checkbox'

import * as S from './styles'
import { LoginContext } from '@/contexts/login'

type HomeTemplateProps = {
  products: IProductoDTO[]
}

const HomeTemplate = ({ products }: HomeTemplateProps) => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [showFavorites, setShowFavorites] = useState<boolean>(false)
  const { login } = useContext(LoginContext)
  const { setProducts, contextProducts, favoritesProducts, setFavoritesProducts } =
    useContext(ProductsContext)

  useEffect(() => {
    setProducts(products)
  }, [products])

  const handleSearch = (value: string, show: boolean) => {
    const productsList = show ? favoritesProducts : products

    const filteredProducts = productsList.filter((product: IProductoDTO) =>
      product.title.toLowerCase().includes(value.toLowerCase().trim()),
    )
    setProducts(filteredProducts)
  }

  const handleSelectFavorites = () => {
    setShowFavorites(!showFavorites)
    handleSearch(search, !showFavorites)
  }

  const handleFavorite = (checked: boolean, product: IProductoDTO) => {
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
      <S.SearchWrapper>
        <Input
          label="Buscar por nome"
          value={search}
          defaultValue={search}
          handleOnChange={(value) => {
            setSearch(value)
            handleSearch(value, showFavorites)
          }}
        />
        {login.isLogged && (
          <Checkbox
            text="Favoritos"
            checked={showFavorites}
            handleToggle={() => {
              handleSelectFavorites()
            }}
          />
        )}
      </S.SearchWrapper>

      {contextProducts?.length ? (
        <S.CardWrapper>
          {contextProducts?.map((product) => (
            <CardProduct
              favorite={favoritesProducts.some((p) => p.id === product.id)}
              key={product.title}
              title={product.title}
              url_image={product.url_image}
              value={product.value}
              handleFavorite={(checked: boolean) => handleFavorite(checked, product)}
              onClick={() => router.push(`/produto/${product.id}`)}
            />
          ))}
        </S.CardWrapper>
      ) : (
        <S.NotFound>{search?.length ? <p>Nenhum produto encontrado 😱</p> : null}</S.NotFound>
      )}
    </S.Container>
  )
}

export default HomeTemplate
