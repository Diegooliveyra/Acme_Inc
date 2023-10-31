'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Title
          onClick={() => {
            if (pathName !== '/') router.back();
          }}
        >
          <span>Acme</span> Inc
        </S.Title>

        <S.HeaderActions>
          <S.HeaderIcon title="Favoritos">
            <ReactSVG
              src={'/assets/icons/heart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          <S.HeaderIcon title="Carrinho">
            <ReactSVG
              src={'/assets/icons/cart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          <S.HeaderIcon title="Login">
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
