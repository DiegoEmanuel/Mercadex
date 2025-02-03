import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../models/Product";

export class ProductController {
    static async create(req: Request, res: Response) {
        try {
            const { name, price, description } = req.body;

            // Validações básicas
            if (!name || !price || !description) {
                return res.status(400).json({ 
                    error: "Todos os campos são obrigatórios" 
                });
            }

            if (price < 0) {
                return res.status(400).json({ 
                    error: "Preço não pode ser negativo" 
                });
            }

            const product = AppDataSource.manager.create(Product, {
                name,
                price,
                description
            });

            const results = await AppDataSource.manager.save(product);
            return res.status(201).json(results);
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            return res.status(500).json({ 
                error: "Erro interno ao criar produto" 
            });
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const products = await AppDataSource.manager.find(Product);
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

            const product = await AppDataSource.manager.findOne(Product, {
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
            const { name, price, description } = req.body;

            if (isNaN(id)) {
                return res.status(400).json({ 
                    error: "ID inválido" 
                });
            }

            if (price && price < 0) {
                return res.status(400).json({ 
                    error: "Preço não pode ser negativo" 
                });
            }

            const product = await AppDataSource.manager.findOne(Product, {
                where: { id }
            });

            if (!product) {
                return res.status(404).json({ 
                    error: "Produto não encontrado" 
                });
            }

            AppDataSource.manager.merge(Product, product, req.body);
            const results = await AppDataSource.manager.save(product);
            return res.json(results);
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            return res.status(500).json({ 
                error: "Erro interno ao atualizar produto" 
            });
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

            const product = await AppDataSource.manager.findOne(Product, {
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