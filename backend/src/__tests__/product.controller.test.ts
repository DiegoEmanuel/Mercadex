import { ProductController } from '../controllers/ProductController';
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ProductModel } from '../models/Product';

jest.mock('../data-source', () => ({
    AppDataSource: {
        manager: {
            create: jest.fn().mockReturnValue({ id: 1, name: 'Test Product', price: 100 }),
            save: jest.fn().mockResolvedValue({ id: 1, name: 'Test Product', price: 100 }),
            find: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Product', price: 100 }]),
            findOne: jest.fn().mockResolvedValue({ id: 1, name: 'Test Product', price: 100 }),
            remove: jest.fn().mockResolvedValue(true)
        }
    }
}));

describe('ProductController', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        mockResponse = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis()
        };
    });

    it('should create product successfully', async () => {
        const productData = {
            name: "Test Product",
            price: 100,
            description: "Test Description"
        };

        mockRequest = {
            body: productData
        };

        await ProductController.create(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should list all products', async () => {
        mockRequest = {};

        await ProductController.findAll(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should find one product', async () => {
        mockRequest = {
            params: { id: '1' }
        };

        await ProductController.findOne(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should handle invalid id in findOne', async () => {
        mockRequest = {
            params: { id: 'invalid' }
        };

        await ProductController.findOne(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
    });

    it('should update product', async () => {
        mockRequest = {
            params: { id: '1' },
            body: {
                name: "Updated Product",
                price: 200
            }
        };

        await ProductController.update(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should delete product', async () => {
        mockRequest = {
            params: { id: '1' }
        };

        await ProductController.delete(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(200);
    });
}); 