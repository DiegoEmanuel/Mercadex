'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ops! Algo deu errado
        </h2>
        <p className="text-gray-600 mb-6">
          Não foi possível carregar os detalhes do produto.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Voltar para lista
        </Link>
      </div>
    </div>
  );
} 