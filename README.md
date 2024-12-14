# Guia de Perguntas e Respostas

Este é um projeto de aplicação web de perguntas e respostas. Os usuários podem criar perguntas, visualizar perguntas anteriores e adicionar respostas às perguntas existentes. Ele foi desenvolvido utilizando Node.js, Express, EJS para o front-end e Sequelize para a interação com o banco de dados MySQL.

## Funcionalidades

- **Cadastro de perguntas:** O usuário pode criar perguntas.
- **Visualização de perguntas:** As perguntas são listadas em ordem decrescente, com as mais recentes aparecendo primeiro.
- **Respostas às perguntas:** Os usuários podem responder a perguntas e visualizar as respostas de outras pessoas.
- **Banco de dados:** Utiliza MySQL para armazenar perguntas e respostas.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de servidor JavaScript.
- **Express.js:** Framework web para Node.js.
- **EJS (Embedded JavaScript):** Motor de template para renderização de HTML.
- **Sequelize:** ORM para MySQL.
- **MySQL:** Banco de dados relacional para armazenar perguntas e respostas.

## Estrutura do Projeto

```bash
├── public/                    # Arquivos estáticos (CSS, JS, imagens)
├── database/                  # Configurações e modelos do banco de dados
│   ├── database.js            # Conexão com o banco de dados
│   ├── perguntaModel.js       # Modelo de Pergunta
│   └── respostaModel.js       # Modelo de Resposta
├── views/                     # Arquivos de visualização (EJS)
│   ├── index.ejs              # Página inicial
│   ├── perguntar.ejs          # Página para cadastrar perguntas
│   ├── question.ejs           # Página para exibir uma pergunta com suas respostas
│   └── partials/              # Arquivos de cabeçalho, barra de navegação, rodapé
├── node_modules/              # Dependências do projeto
├── package.json               # Informações do projeto e dependências
└── index.js                   # Arquivo principal do servidor

## Para Rodar
```bash
    npm install
    nodemon index.js



