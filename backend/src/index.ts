import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import productRoutes from "./routes/product.routes";

export const app = express();

// Configuração do CORS
app.use(cors({
    origin: [process.env.LOCALHOST || "http://localhost:3001"],     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());

// Rotas com prefixo /products
app.use("/products", productRoutes);

if (process.env.NODE_ENV !== 'test') {
    AppDataSource.initialize()
        .then(() => {
            console.log("Conexão com banco estabelecida");
            const PORT = process.env.PORT || 3000;
            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`);
            });
        })
        .catch((error) => {
            console.error("Erro ao conectar ao banco:", error);
            process.exit(1);
        });
}

// Tratamento de erro para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
}); 