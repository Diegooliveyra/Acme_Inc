'use client';

import ProdutoTemplate from '@/templates/ProdutoTemplate';
import { useParams } from 'next/navigation';

export default function Produto() {
  const params = useParams();

  return <ProdutoTemplate id={Number(params?.id)} />;
}
