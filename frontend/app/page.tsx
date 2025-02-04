/**
 * Este arquivo é responsável por renderizar a página inicial do Mercadex,
 * exibindo um catálogo de produtos. Ele utiliza o ProductService para
 * buscar os produtos disponíveis e os exibe em um layout de grade.
 * 
 * Componentes Utilizados:
 * - ProductCard: Componente para exibir informações de cada produto.
 * - FooterSimples: Componente de rodapé simples.
 * 
 * Estrutura:
 * - Header: Exibe o título do catálogo e a quantidade de produtos disponíveis.
 * - Section: Renderiza os produtos em um layout de grade responsivo.
 * - Mensagem: Exibe uma mensagem quando nenhum produto é encontrado.
 * - FooterSimples: Componente de rodapé simples.
 */

import { ProductCard } from './components/ProductCard';
import { ProductService } from './services/productService';
import { Footer } from './components/Footer';

export default async function Home() {
  let products = [];
  try {
    products = await ProductService.getProducts();
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return (
      <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
        <p className="text-center text-red-500 text-lg">
          Verifique sua conexão com a API.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <main className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-800">Catálogo de Produtos do Mercadex</h1>
          <p className="text-center text-gray-600 mt-2">
            {products.length} produto{products.length !== 1 ? 's' : ''} disponíveis
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado.
            </p>
          </div>  
        )}
         </main>
         <Footer />
    </div>

  );
}
