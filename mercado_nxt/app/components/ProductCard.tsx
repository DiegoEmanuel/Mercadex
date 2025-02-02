'use client';

import { Product } from '../types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
          <p className="text-green-600 font-bold text-2xl mb-4">
            R$ {product.price}
          </p>
        </div>
        
        <div className="mt-4">
          <Link
            href={`/products/${product.id}`}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors text-center block"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
} 