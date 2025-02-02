import { Product } from '../types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ProductService {
  static async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_URL}/products`, {
        next: { revalidate: 0 }
      });

      if (!response.ok) {
        throw new Error('Falha ao buscar produtos');
      }

      return response.json();
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }

  static async deleteProduct(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
      });

      return response.ok;
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
    }
  }
} 