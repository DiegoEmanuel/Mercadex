# Sistema de Controle de Produtos 

Esse é o Mercadex, um sistema de controle de produtos e vendas.
```
Mercadex/
Mercadex/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── docs/
│   │   ├── entity/
│   │   ├── models/
│   │   ├── routes/
│   │   │   └── data-source.ts
│   │   ├── services/
│   │   └── types/
│   │       ├── global.d.ts
│   │       └── types.ts
│   ├── .env
│   ├── .env.example
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── Dockerfile
│   ├── jest.setup.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── CreateProduct.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductDetails.tsx
│   │   ├── services/
│   │   └── types/
│   ├── public/
│   ├── .env
│   ├── .env.docker
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── Dockerfile
│   ├── next.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Arquitetura da Aplicação

A aplicação é dividida em duas partes principais: o frontend e o backend. 

- **Frontend**: Desenvolvido com [Next.js](https://nextjs.org/), utiliza [Tailwind CSS](https://tailwindcss.com/) para estilização e é responsável pela interface do usuário. Ele se comunica com o backend para obter e enviar dados.

- **Backend**: Construído com [Node.js](https://nodejs.org/en/) e [Express](https://expressjs.com/), o backend fornece uma API RESTful para o frontend. Ele gerencia a lógica de negócios e interage com o banco de dados usando [Prisma](https://www.prisma.io/).

## Tecnologias Usadas

- [TypeScript](https://www.typescriptlang.org/) para tipagem
- [Node.js](https://nodejs.org/en/) para o backend
- [Next.js](https://nextjs.org/) para o frontend
- [Express](https://expressjs.com/) para o servidor
- [Tailwind CSS](https://tailwindcss.com/) para o estilo
- [Prisma](https://www.prisma.io/) para o banco de dados

para todos os efeitos: 🎺 npm install; 🎺 npm run dev


Back 🚬 [Backend](https://github.com/DiegoEmanuel/Mercadex-API-e-Client/tree/main/backend)
Front 💻 [Frontend](https://github.com/DiegoEmanuel/Mercadex-API-e-Client/tree/main/frontend)
