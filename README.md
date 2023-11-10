## Avaliação
# Aplicação RESTful com operações CRUD 
aplicação RESTful utilizando Node.js, Express e Prisma, que realize operações CRUD em usuários. Cada usuário deve possuir um id
(autoincremental), nome , e email (único). Os dados devem ser persistidos em um banco de dados.

## Inicializando 
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de  teste.

1.Você precisa do Node.js v16.13.0 ou superior para rodar o Prisma em sua maquina.

2.Baixe o projeto, localize ele na sua maquina e abra-o.

3.inicialize um projeto TypeScript usando npm:

$ npm init -y

$ npm install typescript ts-node @types/node --save-dev

4. instale a CLI do Prisma como uma dependência de desenvolvimento no projeto:

$ npm install prisma --save-dev 

5.Agora baixe a depemdencia o Express

$ npm install express

6. Por fim execute a Aplicação

   npx tsx serve.ts
