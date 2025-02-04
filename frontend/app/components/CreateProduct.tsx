'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { Button } from './ui/Button';

export default function CreateProduct() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...product,
                    price: Number(product.price)
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao criar produto');
            }

            router.push('/');
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao criar produto');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Criar Novo Produto
            </h2>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="Nome do Produto"
                    id="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    placeholder="Digite o nome do produto"
                />

                <Input
                    label="Preço"
                    id="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                />

                <TextArea
                    label="Descrição"
                    id="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                    placeholder="Digite a descrição do produto"
                />

                <Button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Criando...' : 'Criar Produto'}
                </Button>
            </form>
        </div>
    );
}
