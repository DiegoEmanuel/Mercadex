import { CreateProductDTO, UpdateProductDTO } from '../../dtos/ProductDTO';

describe('ProductDTO', () => {
    describe('CreateProductDTO', () => {
        it('should validate correct data', () => {
            const data = {
                name: 'Test Product',
                price: 100,
                description: 'Test Description'
            };
            
            expect(() => CreateProductDTO.validate(data)).not.toThrow();
        });

        it('should throw error for negative price', () => {
            const data = {
                name: 'Test Product',
                price: -100,
                description: 'Test Description'
            };
            
            expect(() => CreateProductDTO.validate(data))
                .toThrow('Preço não pode ser negativo');
        });
    });
}); 