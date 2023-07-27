# Backend NodeJS

<p align="center">
  <img alt="Preview" src="./.github/preview/1.png">
</p>

## Projeto

Boilerplate para projetos de Backend NodeJs, utilizando as seguintes tecnologias:

- [Docker](https://www.docker.com/)
- [NodeJs](https://nodejs.org/)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [ExpressAsyncErrors](https://www.npmjs.com/package/express-async-errors)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [SequelizeCli](https://www.npmjs.com/package/sequelize-cli)
- [JsonWebToken](https://jwt.io/)

## Como executar

- Faça o download do [Docker](https://www.docker.com/) para rodar o banco de dados
- Clone o repositório `git clone git@github.com:sergiovieirawebb/backend-nodejs.git`
- Renomei a pasta `backend-nodejs` para o `nome-do-seu-projeto`
- Entre na pasta `nome-do-seu-projeto` com o comando `cd nome-do-seu-projeto`
- Rode o `npm install` para baixar as dependências
- Rode o `docker-compose up -d` para iniciar o banco de dados pelo docker
- Rode o `npm run database` para criar as tabelas do banco de dados
- Rode o `npm run dev` para iniciar a aplicação

Por fim, a aplicação estará disponível em `http://localhost:3001/login`

## Rotas da aplicação

- Dica: faça o download do [insomnia](https://insomnia.rest/) para acessar as rotas.

<p align="center">
  <img alt="Preview" src="./.github/preview/3.png">
</p>

#### Fazer login `POST /login`

> body do envio
```json

{
  "email": "leo@test.com",
  "password": "1234567"
}

```

> body da resposta
```json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJmdWxsTmFtZSI6Ikxlb25hcmRvIiwiZW1haWwiOiJsZW9AdGVzdC5jb20ifSwiaWF0IjoxNjYzNjg5MTI1LCJleHAiOjE2NjQxMjExMjV9.q7shs9V8hHnXJ5HOHy-0vvOS1intyc43rnT6uCzk9sQ"
}

```

- Atenção: inserir em Authorization o token gerado no login para acessar a rota abaixo.

<p align="center">
  <img alt="Preview" src="./.github/preview/2.png">
</p>


#### Buscar todos usuários `GET /users`

> body da resposta
```json
[
  {
    "id": 1,
    "fullName": "Leonardo",
    "email": "leo@test.com",
    "phoneNum": "11942079043"
  },
  {
    "id": 2,
    "fullName": "Eduardo",
    "email": "edu@test.com",
    "phoneNum": "11942079043"
  }
]
```

## Licença

Projeto criado por [Sérgio Vieira](https://www.linkedin.com/in/sergiovieirawebb/). E está sob a licença MIT, veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes... :rocket:
