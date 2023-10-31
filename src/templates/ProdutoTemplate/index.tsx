'use client';

import * as S from './styles';

type ProdutoTemplateProps = {
  id: number;
};

const ProdutoTemplate = ({ id }: ProdutoTemplateProps) => {
  return (
    <S.Container>
      <h1>{id}</h1>
    </S.Container>
  );
};

export default ProdutoTemplate;
