/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Garante que o Next gere arquivos necessários para produção
  experimental: {
    appDir: true,        // Ativa o suporte ao diretório /app (se estiver usando)
  },
};

module.exports = nextConfig;
