import { ProductCard } from './components/ProductCard';
import { ProductService } from './services/productService';
import { FooterSimples } from './components/Footer';

export default async function Home() {
  const products = await ProductService.getProducts();

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
         <FooterSimples />
    </div>

  );
}

