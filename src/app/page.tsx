import { ProductsService } from '@/service/products.service';
import HomeTemplate from '@/templates/HomeTemplate';

export default async function Home() {
  const products = await ProductsService();

  return <HomeTemplate products={products} />;
}
