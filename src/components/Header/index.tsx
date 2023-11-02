'use client'

import { ReactSVG } from 'react-svg'
import * as S from './styles'
import { useRouter, usePathname } from 'next/navigation'
import { useContext, useState } from 'react'
import Sidebar from '../Sidebar'
import { LoginContext } from '@/contexts/login'
import Button from '../Button'
import { CartContext } from '@/contexts/cart'
import Cart from '../Cart'
import Favorites from '../Favorites'
import { moneyFormat } from '@/utils/moneyFormat'
import { ProductsContext } from '@/contexts/products'

const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [showFavorites, setShowFavorites] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const { login, setLogin } = useContext(LoginContext)
  const { total, products } = useContext(CartContext)
  const { favoritesProducts } = useContext(ProductsContext)

  const logout = () => {
    setLogin({ isLogged: false })
  }

  return (
    <S.HeaderContainer>
      <Sidebar isOpen={showFavorites} setIsOpen={setShowFavorites}>
        {favoritesProducts.length ? (
          <Favorites />
        ) : (
          <S.NotFound>
            <p>Nenhum produto favorito encontrado 💔</p>
          </S.NotFound>
        )}
      </Sidebar>
      <Sidebar isOpen={showCart} setIsOpen={setShowCart}>
        {products.length ? (
          <>
            <Cart />
            <S.WrapperPrice>
              <h2>Frete</h2>
              <p>GRÁTIS</p>
            </S.WrapperPrice>
            <S.WrapperPrice>
              <h2>Total</h2>
              <p>{moneyFormat(total)}</p>
            </S.WrapperPrice>
            <Button
              onClick={() => {
                setShowCart(false)
                router.push('/json')
              }}
              style={{ marginTop: '3rem' }}
            >
              Finalizar compra
            </Button>
          </>
        ) : (
          <S.NotFound>
            <p>Carrinho vazio 💔</p>
          </S.NotFound>
        )}
      </Sidebar>

      <S.HeaderContent>
        <S.Title
          onClick={() => {
            router.push('/')
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
