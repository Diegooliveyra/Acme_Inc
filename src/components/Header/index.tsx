'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Title>
          <span>Acme</span> Inc
        </S.Title>

        <S.HeaderActions>
          <S.HeaderIcon>
            <ReactSVG
              src={'/assets/icons/heart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          <S.HeaderIcon>
            <ReactSVG
              src={'/assets/icons/cart.svg'}
              role={'Icon'}
              wrapper="span"
            />
          </S.HeaderIcon>

          <S.HeaderIcon>
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
