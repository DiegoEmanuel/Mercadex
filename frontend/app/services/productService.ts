import { Product } from '../types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ProductService {
  //todo melhoria criar uma classe pra tratar erros
  //todo melhoria criar classe pra montar as requisições
  //get
  static async getProducts(): Promise<Product[]> {
    try {
      console.log('Fazendo requisição para:', `${API_URL}/products`);
      const response = await fetch(`${API_URL}/products`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('Resposta não ok:', response.status, response.statusText);
        throw new Error('Falha ao buscar produtos');
      }
      
      const data = await response.json();
      console.log('Dados recebidos:', data);
      return data;
    } catch (error) {
      console.error('Erro detalhado ao buscar produtos:', error);
      throw error;
    }
  }

  static async deleteProduct(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Falha ao deletar produto');
      }

      return true;
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
    }
  }
  //create
  static async createProduct(product: Product): Promise<Product> {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Falha ao criar produto');
      }

      return response.json();
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  }

  //update
  static async updateProduct(id: number, product: Product): Promise<Product> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar produto');
      } 

      return response.json();
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw error;
    }
  }

  //getById
  static async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      
      if (!response.ok) {
        throw new Error('Produto não encontrado');
      }

      return response.json();
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      throw error;
    }
  }
} 