#  Sistema de Gerenciamento de Tarefas Colaborativo

Um sistema backend para gerenciamento colaborativo de tarefas, desenvolvido com Node.js, Express, TypeScript e Prisma. O projeto permite que equipes de trabalho ou grupos de estudo organizem tarefas e acompanhem projetos.

---

##  Objetivo do Projeto

Construir uma API REST capaz de:

- Gerenciar usuários e autenticação
- Criar e organizar projetos
- Criar, editar e acompanhar tarefas
- Controlar permissões e acessos
- Registrar histórico de alterações das tarefas

---

##  Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- Bcrypt
- Jest (testes)
- Git & GitHub

---

##  Estrutura do Projeto

```
task-manager/
├── prisma/
├── src/
├── postman/
├── .env.example
├── package.json
├── tsconfig.json
├── prisma.config.ts
└── README.md
```

---

##  Funcionalidades

###  Usuários
- Cadastro de usuários
- Login com autenticação JWT
- Atualização de perfil
- Controle de acesso por usuário
- Função de administrador
