import { ProductService } from '@/app/services/productService';
import { ProductDetails } from '@/app/components/ProductDetails';

export default async function ProductPage({
  params,
}: {
  params: { id: string }; //essa linha é para o nextjs saber que é um objeto com uma propriedade id que é uma string
}) {
//   { params } → Desestruturação de parâmetros (para pegar o id da URL).
// { id: string } → Tipagem TypeScript (define o tipo do id).
// { ... } → Corpo da função (onde o código principal é executado).

  const product = await ProductService.getProductById(Number(params.id)); // essa linha é para buscar o produto pelo id
  return <ProductDetails product={product} />; // essa linha é para renderizar o componente ProductDetails com o produto encontrado
}


export function generateMetadata({ params }: { params: { id: string } }) { // essa linha é para gerar o metadata do produto export function generateMetadata: Função do Next.js usada para definir metadados da página, como o título que aparece na aba do navegador ou no Google.

  return {
    title: `Produto ${params} - Detalhes`, // essa linha é para definir o título da página
  };
} 