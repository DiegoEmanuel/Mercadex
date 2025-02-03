import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import productRoutes from "./routes/product.routes";

const app = express();

// Configuração do CORS
app.use(cors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


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
//rota / aparecerá bem vindo
app.get('/', (req, res) => {
    res.send('Bem vindo a API do mercadex');
});


// Tratamento de erro para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 