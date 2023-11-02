'use client'

import { ReactSVG } from 'react-svg'
import * as S from './styles'
import { useRouter, usePathname } from 'next/navigation'
import { useContext, useState } from 'react'
import Sidebar from '../Sidebar'
import { LoginContext } from '@/contexts/login'
import { User } from '@/types/user'
import { ProductsContext } from '@/contexts/products'
import CardProductFlat from '../CardProductFlat'
import Button from '../Button'

const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [showFavorites, setShowFavorites] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const { login, setLogin } = useContext(LoginContext)
  const { favoritesProducts, setFavoritesProducts, contextProducts } = useContext(ProductsContext)

  const logout = () => {
    setLogin({ isLogged: false })
  }

  const handleRemove = (id: number) => {
    const products = [...favoritesProducts]
    setFavoritesProducts(products.filter((p) => p.id !== id))
  }

  return (
    <S.HeaderContainer>
      <Sidebar isOpen={showFavorites} setIsOpen={setShowFavorites}>
        <S.Title style={{ margin: '16px 0' }}>Meus Favoritos</S.Title>
        <S.WrapperCards>
          {favoritesProducts?.map((product) => (
            <CardProductFlat
              key={product.id}
              data={product}
              handleRemove={() => handleRemove(product.id)}
            />
          ))}
        </S.WrapperCards>
      </Sidebar>
      <Sidebar isOpen={showCart} setIsOpen={setShowCart}>
        <S.Title style={{ margin: '16px 0' }}> 🛒 Carrinho</S.Title>
        <S.WrapperCartCards>
          {contextProducts?.map((product) => (
            <CardProductFlat
              key={product.id}
              data={product}
              handleRemove={() => handleRemove(product.id)}
            />
          ))}
        </S.WrapperCartCards>
        <S.WrapperPrice>
          <h2>Entrega</h2>
          <p>GRATIS</p>
        </S.WrapperPrice>
        <S.WrapperPrice>
          <h2>Total</h2>
          <p>{'R$ 10,00'}</p>
        </S.WrapperPrice>

        <Button style={{ marginTop: '3rem' }}>Finalizar compra</Button>
      </Sidebar>

      <S.HeaderContent>
        <S.Title
          onClick={() => {
            if (pathName !== '/') router.back()
          }}
        >
          <span>Acme</span> Inc
        </S.Title>

        <S.HeaderActions>
          {login?.isLogged ? (
            <S.HeaderIcon title="Favoritos" onClick={() => setShowFavorites(true)}>
              <ReactSVG src={'/assets/icons/heart.svg'} role={'Icon'} wrapper="span" />
            </S.HeaderIcon>
          ) : null}

          <S.HeaderIcon title="Carrinho" onClick={() => setShowCart(true)}>
            <ReactSVG src={'/assets/icons/cart.svg'} role={'Icon'} wrapper="span" />
          </S.HeaderIcon>

          {!login?.isLogged ? (
            <S.HeaderIcon title="Login" onClick={() => router.push('/login')}>
              <ReactSVG src={'/assets/icons/user.svg'} role={'Icon'} wrapper="span" />
            </S.HeaderIcon>
          ) : (
            <>
              {login?.user?.name ? (
                <S.WrapperUser>
                  <h2>{login?.user?.name.split(' ')[0]}</h2>
                  <button onClick={logout}>Sair?</button>
                </S.WrapperUser>
              ) : null}
            </>
          )}
        </S.HeaderActions>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
