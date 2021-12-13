[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6444240&assignment_repo_type=AssignmentRepo)

# DJAN

Uma rede social com mensagens temporárias e personalizadas.

Integrantes: Andressa Dos Santos, Dayvison Augusto De Oliveira Da Costa, José Paulo Macedo, Nicolas Vycas Nery

## Como modificar?

Primeiro, baixe as dependências:

```bash

npm install

```

segundo, crie um arquivo `.env.local` com as seguintes variáveis:

```ini

DATABASE_URL={DATABASE_URL}
DATABASE_NAME=psw-djan
NEXTAUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID={GITHUB_CLIENT_ID}
GITHUB_CLIENT_SECRET={GITHUB_CLIENT_SECRET}

```

Terceiro, inicie o servidor de desenvolvimento:

```bash

npm run dev

```

Quarto, abra o link [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
