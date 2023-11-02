import { useContext } from 'react'
import CardProductFlat from '../CardProductFlat'
import { ProductsContext } from '@/contexts/products'
import { useRouter } from 'next/navigation'
import * as S from './styles'

const Favorites = () => {
  const router = useRouter()
  const { favoritesProducts, setFavoritesProducts, setShowFavorites } = useContext(ProductsContext)

  const handleRemove = (id: number) => {
    const products = [...favoritesProducts]
    setFavoritesProducts(products.filter((p) => p.id !== id))
  }

  return (
    <>
      <S.Title style={{ margin: '16px 0' }}>Meus Favoritos</S.Title>
      <S.WrapperCards>
        {favoritesProducts?.map((product) => (
          <CardProductFlat
            onClick={() => {
              router.push(`/produto/${product.id}`)
              setShowFavorites(false)
            }}
            key={product.id}
            data={product}
            handleRemove={() => handleRemove(product.id)}
          />
        ))}
      </S.WrapperCards>
    </>
  )
}

export default Favorites
