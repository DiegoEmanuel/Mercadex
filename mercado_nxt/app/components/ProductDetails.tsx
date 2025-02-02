'use client';

import { Product } from '../types/product';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const handleDelete = async () => {
    try {
      if (confirm('Tem certeza que deseja excluir este produto?')) {
        const response = await fetch(`${API_URL}/products/${product.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          alert('Produto excluído com sucesso!');
          router.push('/');
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao excluir produto');
        }
      }
    } catch (error) {
      console.error('Erro:', error);
      alert(error instanceof Error ? error.message : 'Erro ao excluir produto');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg" // para o svg funcionar
              width="20" //largura de 20
              height="20" //altura de 20
              viewBox="0 0 24 24" // para o svg funcionar
              fill="none" // para o svg funcionar
              stroke="currentColor" // para o svg funcionar
              strokeWidth="2" // para o svg funcionar
              strokeLinecap="round" // para o svg funcionar

              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar para lista
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-green-600">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(Number(product.price))}
                </p>
              </div>
              <span className="text-sm text-gray-500">
                ID: {product.id}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Descrição
            </h2>
            <p className="text-gray-600 text-lg">
              {product.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Informações Adicionais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Criado em</p>
                <p className="font-medium text-gray-800">{formatDate(product.createdAt)}</p>
              </div>
              <div>
                <p className="text-gray-600">Última atualização</p> 

                <p className="font-medium text-gray-800">{formatDate(product.updatedAt)}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition-colors"
            >
              Excluir Produto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 