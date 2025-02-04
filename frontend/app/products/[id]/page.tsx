/**
 * Este arquivo é responsável por renderizar a página de detalhes de um produto específico.
 * Utiliza o serviço ProductService para buscar os dados do produto pelo ID fornecido na URL.
 * O componente ProductDetails é usado para exibir as informações do produto.
 * A função generateMetadata é utilizada para definir os metadados da página, como o título.
 */

import { ProductService } from '@/app/services/productService';
import { ProductDetails } from '@/app/components/ProductDetails';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await ProductService.getProductById(Number(params.id));
  return <ProductDetails product={product} />;
}

interface MetadataProps {
  params: { id: string };
}

export function generateMetadata({ params }: MetadataProps) {
  return {
    title: `Produto ${params.id} - Detalhes`,
  };
} 