# MyTasks — Gerenciador de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com HTML, CSS e JavaScript puro (Vanilla JS), sem frameworks ou bibliotecas externas.

🔗 [Acesse o projeto](https://vitorfelipedev.github.io/to-do-list/)

## Funcionalidades

- Adicionar, editar e excluir tarefas
- Categorias com cores (Pessoal, Trabalho, Saúde, Estudos, Finanças)
- Data de vencimento com alertas (atrasada / vence hoje)
- Filtros por status (Todas, Ativas, Concluídas) e categoria
- Drag and drop para reordenar tarefas
- Tema claro/escuro com persistência
- Dados salvos no localStorage

## Tecnologias

- HTML5 semântico e acessível
- CSS modular com variáveis e mobile-first
- JavaScript ES6+ com arquitetura em módulos

## Arquitetura

src/
├── components/   → taskItem, taskList, taskActions, filters, form
├── models/       → task (função fábrica)
├── services/     → storage (abstração do localStorage)
├── styles/       → módulos CSS por componente
└── utils/        → theme, date, counter, dragAndDrop

## Como rodar localmente

git clone https://github.com/vitorfelipedev/to-do-list.git
cd to-do-list
# Abrir index.html com Live Server ou similar
