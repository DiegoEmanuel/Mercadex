# Sistema de Controle de produtos 
 ![image](https://github.com/user-attachments/assets/7686d14b-2b9a-4e41-8ec1-58a3fb8b194a)


## Pacotes Necessários
```bash
# Dependências principais
npm install express @types/express          # Framework web
npm install typescript @types/node          # TypeScript
npm install typeorm reflect-metadata        # ORM
npm install pg                             # Driver PostgreSQL
npm install @prisma/client prisma          # Prisma ORM
npm install dotenv                         # Variáveis de ambiente
npm install ts-node-dev                    # Desenvolvimento
npm install cors @types/cors               # CORS para requisições do frontend

# Ou instale tudo de uma vez:
npm install express @types/express typescript @types/node typeorm reflect-metadata pg @prisma/client prisma dotenv ts-node-dev cors @types/cors
```

## Instruções para Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone <https://github.com/DiegoEmanuel/crud_node_typescript_next>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd crud_node_typescript_next
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o ambiente:
   ```bash
   # Copie o arquivo de exemplo de variáveis de ambiente
   cp .env.example .env
   
   # Configure suas variáveis no arquivo .env
   DATABASE_URL="postgresql://user:password@localhost:5432/database"
   ```
5. Configure o CORS:
   ```typescript
   // No arquivo src/index.ts, ajuste a origem conforme necessário
   app.use(cors({
       origin: "http://localhost:3001", // URL do seu frontend
       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
       allowedHeaders: ["Content-Type", "Authorization"]
   }));
   ```
6. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```
7. Inicie o projeto em desenvolvimento:
   ```bash
   npm run dev
   ```

## Scripts Disponíveis
```bash
npm run dev    # Inicia o servidor em modo desenvolvimento
npm run build  # Compila o projeto TypeScript
npm start      # Inicia o servidor em produção
```

## Rotas da API
- POST /products   - Criar produto
- GET /products    - Listar produtos
- GET /products/1  - Buscar produto específico
- GET /products/1/details  - Buscar detalhes completos do produto
- PUT /products/1  - Atualizar produto
- DELETE /products/1 - Deletar produto

## Exemplo de Requisição
```json
// POST /products
{
    "name": "Produto Teste",
    "price": 99.99,
    "description": "Descrição do produto"
}
```

melhorias 

[ ] controle de clientes
[ ] modulo de vendas
[ ] controle de estoque
[ ] gestão financeira 
