export class CreateProductDTO {
  name: string;
  price: number;
  description: string;

  static validate(data: any): CreateProductDTO {
    if (!data.name || !data.price || !data.description) {
      throw new Error("Todos os campos são obrigatórios");
    }
    if (data.price < 0) {
      throw new Error("Preço não pode ser negativo");
    }
    return data as CreateProductDTO;
  }
}

export class UpdateProductDTO {
  name?: string;
  price?: number;
  description?: string;

  static validate(data: any): UpdateProductDTO {
    if (data.price !== undefined && data.price < 0) {
      throw new Error("Preço não pode ser negativo");
    }
    return data as UpdateProductDTO;
  }
} 