# Sistema de Controle de Produtos 
![Modern Gaming Cover YouTube Banner](https://github.com/user-attachments/assets/f54e3b3f-86fa-4042-8ed7-47fbd46b2a7b)

Esse é o Mercadex, um sistema de controle de produtos e vendas.

Mercadex/
├── backend/
│   ├── Dockerfile
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md

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

Para todos os efeitos: 🎺 npm install; 🎺 npm run dev

Back 🚬 [Backend](https://github.com/DiegoEmanuel/Mercadex-API-e-Client/tree/main/backend)  
Front 💻 [Frontend](https://github.com/DiegoEmanuel/Mercadex-API-e-Client/tree/main/frontend)
