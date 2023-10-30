import HomeTemplate from '@/templates/HomeTemplate';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`, {
    cache: 'no-store',
  });
  const data: any[] = await response.json();

  return <HomeTemplate />;
}
