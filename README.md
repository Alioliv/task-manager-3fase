# 📋 Sistema de Gerenciamento de Tarefas Colaborativo

Um sistema backend para gerenciamento colaborativo de tarefas, desenvolvido com Node.js, Express, TypeScript e Prisma. O projeto permite que equipes de trabalho ou grupos de estudo organizem tarefas e acompanhem projetos.

---

## Objetivo do Projeto

Construir uma API capaz de:

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

## 📁 Estrutura do Projeto

```
task-manager/
├── postman/
├── prisma/
├── src/
│   ├── common/
│   ├── middlewares/
│   ├── prisma/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── app.ts
│   └── server.ts
├── .env.example
├── .gitignore
├── LICENSE
├── README.md
├── jest.config.ts
├── package-lock.json
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

---

##  Funcionalidades

### Usuários
- Cadastro de usuários
- Login com autenticação JWT
- Atualização de perfil
- Controle de acesso por usuário
- Função de administrador
