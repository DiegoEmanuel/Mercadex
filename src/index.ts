import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import productRoutes from "./routes/product.routes";

const app = express();
app.use(express.json());

// Inicializar conexão com o banco
AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com banco estabelecida");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao banco:", error);
        process.exit(1);
    });

// Rotas
app.use(productRoutes);

// Tratamento de erro para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 