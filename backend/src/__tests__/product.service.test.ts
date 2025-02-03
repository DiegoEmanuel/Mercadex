import { ProductService } from '../services/ProductService';
import { CreateProductDTO } from '../dtos/ProductDTO';
import { AppDataSource } from '../data-source';

describe('ProductService', () => {
    let service: ProductService;

    beforeAll(async () => {
        await AppDataSource.initialize();
        service = new ProductService();
    });

    afterAll(async () => {
        await AppDataSource.destroy();
    });

    it('should create a product', async () => {
        const productData: CreateProductDTO = {
            name: "Test Product",
            price: 100,
            description: "Test Description"
        };

        const product = await service.create(productData);
        expect(product).toHaveProperty('id');
        expect(product.name).toBe(productData.name);
    });

    it('should not create product with negative price', async () => {
        const productData: CreateProductDTO = {
            name: "Test Product",
            price: -100,
            description: "Test Description"
        };

        await expect(CreateProductDTO.validate(productData))
            .rejects
            .toThrow("Preço não pode ser negativo");
    });

    it('should find all products', async () => {
        const products = await service.findAll();
        expect(Array.isArray(products)).toBe(true);
    });
}); 