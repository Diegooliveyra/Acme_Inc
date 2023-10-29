export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`);
  const data = await response.json();
  return <h1>{data.name}</h1>;
}
