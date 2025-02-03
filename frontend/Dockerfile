FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de configuração primeiro
COPY package*.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar o resto dos arquivos
COPY . .

# Copiar arquivo de ambiente
COPY .env.docker .env

# Gerar os estilos do Tailwind
RUN npm run build

EXPOSE 3001

# Usar o comando de produção se necessário
CMD ["npm", "run", "dev"] 