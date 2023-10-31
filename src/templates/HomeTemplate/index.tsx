'use client';

import CardProduct, { CardProps } from '@/components/CardProduct';
import * as S from './styles';
import { useRouter } from 'next/navigation';

type HomeTemplateProps = {
  data: CardProps[];
};

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  const router = useRouter();
  return (
    <S.Container>
      <S.CardWrapper>
        {data.map((e) => (
          <CardProduct
            key={e.title}
            title={e.title}
            url_image={e.url_image}
            value={e.value}
            handleFavorite={(v) => console.log(v)}
            onClick={() => router.push(`/produto/${e.id}`)}
          />
        ))}
      </S.CardWrapper>
    </S.Container>
  );
};

export default HomeTemplate;
