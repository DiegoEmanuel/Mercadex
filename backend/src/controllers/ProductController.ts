import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ProductModel } from "../models/Product";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/ProductDTO";

export class ProductController {
    static async create(req: Request, res: Response) {
        try {
            const productData = CreateProductDTO.validate(req.body);
            const product = AppDataSource.manager.create(ProductModel, productData);
            const results = await AppDataSource.manager.save(product);
            return res.status(201).json(results);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const products = await AppDataSource.manager.find(ProductModel);
            return res.json(products);
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            return res.status(500).json({ 
                error: "Erro interno ao buscar produtos" 
            });
        }
    }

    static async findOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({ 
                    error: "ID inválido" 
                });
            }

            const product = await AppDataSource.manager.findOne(ProductModel, {
                where: { id }
            });

            if (!product) {
                return res.status(404).json({ 
                    error: "Produto não encontrado" 
                });
            }

            return res.json(product);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            return res.status(500).json({ 
                error: "Erro interno ao buscar produto" 
            });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const productData = UpdateProductDTO.validate(req.body);
            
            const product = await AppDataSource.manager.findOne(ProductModel, {
                where: { id }
            });

            if (!product) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            AppDataSource.manager.merge(ProductModel, product, productData);
            const results = await AppDataSource.manager.save(product);
            return res.json(results);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({ 
                    error: "ID inválido" 
                });
            }

            const product = await AppDataSource.manager.findOne(ProductModel, {
                where: { id }
            });

            if (!product) {
                return res.status(404).json({ 
                    error: "Produto não encontrado" 
                });
            }

            await AppDataSource.manager.remove(product);
            
            // Adicione um log para debug
            console.log(`Produto ${id} deletado com sucesso`);
            
            return res.status(200).json({ 
                success: true,
                message: "Produto removido com sucesso" 
            });
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            return res.status(500).json({ 
                error: "Erro interno ao deletar produto" 
            });
        }
    }
} 