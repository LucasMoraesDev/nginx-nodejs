# Dockerfile for Node.js application
FROM node:14

WORKDIR /app

# Copiando os arquivos package.json e package-lock.json do diretório src
COPY /package.json /package-lock.json ./

# Instalando as dependências
RUN npm install
RUN npm install mysql --save


# Copiando todo o código da aplicação
COPY . .

CMD ["node", "app.js"]
