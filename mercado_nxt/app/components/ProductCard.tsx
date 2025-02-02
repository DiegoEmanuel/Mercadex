'use client';

import { Product } from '../types/product';
import Link from 'next/link';
import { ProductService } from '../services/productService';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      if (confirm('Tem certeza que deseja excluir este produto?')) {
        const success = await ProductService.deleteProduct(product.id);
        if (success) {
          router.refresh();
        }
      }
    } catch (error) {
      alert('Erro ao excluir produto');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <p className="text-green-600 font-bold text-2xl mb-4">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(product.price))}
          </p>
        </div>
        
        <div className="flex gap-3 mt-4">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-center font-medium"
          >
            Ver Detalhes
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
} 