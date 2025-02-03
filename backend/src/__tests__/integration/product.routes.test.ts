import request from 'supertest';
import { app } from '../../index';
import { AppDataSource } from '../../data-source';
import { ProductModel } from '../../models/Product';

describe('Product Routes', () => {
    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }
    });

    afterAll(async () => {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    });

    beforeEach(async () => {
        const repository = AppDataSource.getRepository(ProductModel);
        await repository.clear();
    });

    it('should create a product', async () => {
        const response = await request(app)
            .post('/products/products')
            .send({
                name: 'iPhone 16',
                price: 999,
                description: 'O mais recente smartphone da Apple'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should list all products', async () => {
        const repository = AppDataSource.getRepository(ProductModel);
        await repository.save({
            name: 'iPhone 16',
            price: 999,
            description: 'O mais recente smartphone da Apple'
        });

        const response = await request(app).get('/products/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(1);
    });
}); 