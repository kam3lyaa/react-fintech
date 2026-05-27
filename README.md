FINTECH PROJECT
================

Projeto de uma aplicação fintech para controle de receitas e despesas.

O sistema permite gerenciar transações financeiras de forma completa, incluindo criação, edição, exclusão e visualização de dados com gráficos.

------------------------------------
FUNCIONALIDADES
------------------------------------

- Cadastro de entradas (income)
- Cadastro de saídas (expenses)
- Listagem de todas as transações
- Edição de transações existentes (update)
- Exclusão de transações (delete)
- Resumo financeiro (saldo total)
- Gráficos de desempenho financeiro

------------------------------------
TECNOLOGIAS
------------------------------------

Frontend:
- React
- Vite
- TypeScript
- Bootstrap
- Bootstrap Icons
- Chart.js
- React Router DOM

Backend:
- Spring Boot (Java)
- API REST
- Integração com banco de dados

------------------------------------
COMO RODAR O PROJETO
------------------------------------

FRONTEND:

1. Instalar dependências:
   npm install

2. Rodar o projeto:
   npm run dev

3. Abrir no navegador:
   http://localhost:5173


BACKEND (Spring Boot):

- Abrir o projeto na IDE (IntelliJ, Eclipse ou VS Code)
- Localizar a classe principal do Spring Boot (ex: FintechApplication)
- Clicar em "Run" (botão de play ▶️)

O backend normalmente roda em:
http://localhost:8080


------------------------------------
CONEXÃO FRONTEND + BACKEND
------------------------------------

O frontend se conecta com o backend através de chamadas HTTP (API REST).

Exemplo de endpoints utilizados:

- GET    /transactions      -> lista todas as transações
- POST   /transactions      -> cria nova transação
- PUT    /transactions/{id} -> atualiza uma transação
- DELETE /transactions/{id} -> remove uma transação

URL base da API:
http://localhost:8080/api

------------------------------------
IMPORTANTE
------------------------------------

- O backend deve estar rodando antes do frontend
- Sem o Spring Boot ativo, os dados não serão carregados
- O frontend depende totalmente da API local

------------------------------------
OBJETIVO DO PROJETO
------------------------------------

Este projeto foi desenvolvido para praticar:

- Desenvolvimento de interfaces com React
- Consumo de APIs REST
- Integração frontend + backend
- Operações CRUD (Create, Read, Update, Delete)
- Uso de TypeScript em projetos reais
- Manipulação de estado e componentes
- Visualização de dados com gráficos
- Desenvolvimento backend com Spring Boot
