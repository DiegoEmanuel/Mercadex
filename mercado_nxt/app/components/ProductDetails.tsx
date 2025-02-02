'use client';

import { Product } from '../types/product';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product: initialProduct }: ProductDetailsProps) {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState(initialProduct);
  const [isSaving, setIsSaving] = useState(false);

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

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const response = await fetch(`${API_URL}/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        alert('Produto atualizado com sucesso!');
        setIsEditing(false);
        router.refresh();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao atualizar produto');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert(error instanceof Error ? error.message : 'Erro ao atualizar produto');
    } finally {
      setIsSaving(false);
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
        <div className="mb-6 flex justify-between items-center">
          {/* O link é um componente do nextjs que é usado para navegar entre as páginas */}
          {/* O href é a propriedade que define o caminho da página */}
          {/* O className é a propriedade que define o estilo da página */}
          {/* O svg é um componente do nextjs que é usado para exibir um ícone */}
          {/* O path é a propriedade que define o caminho do ícone */}
          {/* O viewBox é a propriedade que define o espaço do ícone */}
          {/* O fill é a propriedade que define o preenchimento do ícone */}
          {/* O stroke é a propriedade que define a cor do ícone */}
          {/* O strokeWidth é a propriedade que define a largura do ícone */}
          
          <Link href="/" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar para lista
          </Link> 
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    className="text-3xl font-bold text-gray-800 mb-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>
                )}
                {isEditing ? (
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    className="text-2xl font-bold text-green-600 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <p className="text-2xl font-bold text-green-600">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(Number(product.price))}
                  </p>
                )}
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
            {isEditing ? (
              <textarea
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 text-gray-600 text-lg"
                rows={4}
              />
            ) : (
              <p className="text-gray-600 text-lg">
                {product.description}
              </p>
            )}
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

          <div className="border-t border-gray-200 pt-6 flex gap-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isSaving ? 'Salvando...' : 'Salvar Alterações'}
              </button>
            ) : (
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition-colors"
              >
                Excluir Produto
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 