'use client'

import { useRouter } from 'next/navigation'
import { ReactSVG } from 'react-svg'
import { useContext } from 'react'

import Favorites from '../Favorites'
import Sidebar from '../Sidebar'
import Button from '../Button'
import Cart from '../Cart'

import { ProductsContext } from '@/contexts/products'
import { LoginContext } from '@/contexts/login'
import { CartContext } from '@/contexts/cart'

import { moneyFormat } from '@/utils/moneyFormat'

import * as S from './styles'

const Header = () => {
  const router = useRouter()
  const { login } = useContext(LoginContext)
  const { total, products } = useContext(CartContext)
  const { favoritesProducts, setShowCart, setShowFavorites, showCart, showFavorites } =
    useContext(ProductsContext)

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
                if (login.isLogged) {
                  router.push('/json-view')
                  return
                }

                router.push('/login')
              }}
              style={{ marginTop: '3rem' }}
            >
              Finalizar compra
            </Button>

            <Button
              theme="secondary"
              onClick={() => {
                setShowCart(false)

                router.push('/')
              }}
              style={{ marginTop: '3rem' }}
            >
              Ver mais produtos
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
              {favoritesProducts.length > 0 && <span>{favoritesProducts.length}</span>}
              <ReactSVG src={'/assets/icons/heart.svg'} role={'Icon'} wrapper="div" />
            </S.HeaderIcon>
          ) : null}

          <S.HeaderIcon title="Carrinho" onClick={() => setShowCart(true)}>
            {products.length > 0 && <span>{products.length}</span>}
            <ReactSVG src={'/assets/icons/cart.svg'} role={'Icon'} wrapper="div" />
          </S.HeaderIcon>

          {!login?.isLogged ? (
            <S.HeaderIcon title="Login" onClick={() => router.push('/login')}>
              <ReactSVG src={'/assets/icons/user.svg'} role={'Icon'} wrapper="div" />
            </S.HeaderIcon>
          ) : (
            <>
              {login?.user?.name ? (
                <S.WrapperUser>
                  <h2>{login?.user?.name.split(' ')[0]}</h2>
                  <button onClick={() => router.push('/minha-conta')}>Minha Conta</button>
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
