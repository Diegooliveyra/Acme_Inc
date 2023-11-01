'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import Sidebar from '../Sidebar';
import { LoginContext } from '@/contexts/login';
import { User } from '@/types/user';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { login, setLogin } = useContext(LoginContext);

  const logout = () => {
    setLogin({ isLogged: false });
  };

  return (
    <S.HeaderContainer>
      <Sidebar isOpen={showFavorites} setIsOpen={setShowFavorites}>
        <h1>favoritos</h1>
      </Sidebar>
      <Sidebar isOpen={showCart} setIsOpen={setShowCart}>
        <h1>Carrinho</h1>
      </Sidebar>

      <S.HeaderContent>
        <S.Title
          onClick={() => {
            if (pathName !== '/') router.back();
          }}
        >
          <span>Acme</span> Inc
        </S.Title>

        <S.HeaderActions>
          {login?.isLogged ? (
            <S.HeaderIcon
              title="Favoritos"
              onClick={() => setShowFavorites(true)}
            >
              <ReactSVG
                src={'/assets/icons/heart.svg'}
                role={'Icon'}
                wrapper="span"
              />
            </S.HeaderIcon>
          ) : null}

          <S.HeaderIcon title="Carrinho" onClick={() => setShowCart(true)}>
            <ReactSVG
              src={'/assets/icons/cart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          {!login?.isLogged ? (
            <S.HeaderIcon title="Login" onClick={() => router.push('/login')}>
              <ReactSVG
                src={'/assets/icons/user.svg'}
                role={'Icon'}
                wrapper="span"
              />
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
  );
};

export default Header;
