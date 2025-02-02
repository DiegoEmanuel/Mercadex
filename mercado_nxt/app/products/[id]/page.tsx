import { ProductService } from '@/app/services/productService';
import { ProductDetails } from '@/app/components/ProductDetails';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await ProductService.getProductById(Number(params.id));
  return <ProductDetails product={product} />;
}

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Produto ${params.id} - Detalhes`,
  };
} 