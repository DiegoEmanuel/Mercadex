import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";

const app = express();
app.use(express.json());

// Inicializar conexão com o banco
AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com banco estabelecida");
    })
    .catch((error) => console.log(error));

// Criar produto
app.post("/products", async (req, res) => {
    try {
        const product = AppDataSource.manager.create(Product, req.body);
        const results = await AppDataSource.manager.save(product);
         res.json(results);
    } catch (error) {
         res.status(500).json({ error: "Erro ao criar produto" });
    }
});

// Listar todos os produtos
app.get("/products", async (req, res) => {
    try {
        const products = await AppDataSource.manager.find(Product);
         res.json(products);
    } catch (error) {
         res.status(500).json({ error: "Erro ao buscar produtos" });
    }
});

// Buscar produto por ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await AppDataSource.manager.findOne(Product, {
            where: { id: parseInt(req.params.id) }
        });
        if (!product) {
             res.status(404).json({ error: "Produto não encontrado" });
        }
         res.json(product);
    } catch (error) {
         res.status(500).json({ error: "Erro ao buscar produto" });
    }
});

// Atualizar produto
app.put("/products/:id", async (req, res) => {
    try {
        const product = await AppDataSource.manager.findOne(Product, {
            where: { id: parseInt(req.params.id) }
        });
        if (!product) {
             res.status(404).json({ error: "Produto não encontrado" });
        }
        AppDataSource.manager.merge(Product, product, req.body);
        const results = await AppDataSource.manager.save(product);
         res.json(results);
    } catch (error) {
         res.status(500).json({ error: "Erro ao atualizar produto" });
    }
});

// Deletar produto
app.delete("/products/:id", async (req, res) => {
    try {
        const product = await AppDataSource.manager.findOne(Product, {
            where: { id: parseInt(req.params.id) }
        });
        if (!product) {
             res.status(404).json({ error: "Produto não encontrado" });
        }
        await AppDataSource.manager.remove(product);
         res.json({ message: "Produto removido com sucesso" });
    } catch (error) {
         res.status(500).json({ error: "Erro ao deletar produto" });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
}); 