import { ProductService } from '@/app/services/productService';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await ProductService.getProductById(Number(resolvedParams.id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold">R$ {product.price}</p>
    </div>
  );
}