import { CardProps } from '@/components/CardProduct';
import HomeTemplate from '@/templates/HomeTemplate';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`, {
    cache: 'no-store',
  });
  const data: CardProps[] = await response.json();

  return <HomeTemplate data={data} />;
}
