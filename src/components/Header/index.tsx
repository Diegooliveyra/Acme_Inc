'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Sidebar from '../Sidebar';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

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

          <S.HeaderIcon title="Carrinho" onClick={() => setShowCart(true)}>
            <ReactSVG
              src={'/assets/icons/cart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          <S.HeaderIcon title="Login" onClick={() => router.push('/login')}>
            <ReactSVG
              src={'/assets/icons/user.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>
        </S.HeaderActions>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
