# 🧾 Banking System CLI

Projeto de sistema bancário desenvolvido em **TypeScript** executado via **terminal (CLI)**.  
O objetivo do projeto foi praticar conceitos fundamentais de **Programação Orientada a Objetos, arquitetura em camadas e lógica de negócio**.

---

## 🚀 Funcionalidades

O sistema permite:

- 👤 Registrar novos clientes
- 🔍 Buscar clientes pelo ID
- 📋 Listar todos os clientes
- ❌ Remover clientes
- 💳 Criar contas bancárias
- 💰 Depositar dinheiro
- 💸 Sacar dinheiro
- 📊 Consultar saldo da conta

Todas as interações são feitas através de um **menu interativo no terminal**.

---

## 🧠 Conceitos aplicados

Durante o desenvolvimento deste projeto foram utilizados diversos conceitos importantes de desenvolvimento backend:

- Programação Orientada a Objetos (POO)
- Encapsulamento
- Separação de responsabilidades
- Arquitetura em camadas
- Manipulação de listas em memória
- Tratamento de erros
- Estruturação de projeto

---

## 🏗️ Estrutura do Projeto

O projeto foi organizado em camadas para melhorar a manutenção e organização do código:

src
├── app
├── models
├── repositories
├── services
└── consoleView

- **Models** → Representação das entidades do sistema (Customer, Account, etc)
- **Repositories** → Responsável pelo armazenamento e busca dos dados
- **Services** → Contém as regras de negócio
- **ConsoleView** → Interface com o usuário via terminal
- **App** → Inicialização da aplicação

🛠️ Tecnologias utilizadas

TypeScript

Node.js

JavaScript

Programação Orientada a Objetos

🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em prática de conceitos de backend e organização de código, simulando o funcionamento básico de um sistema bancário.