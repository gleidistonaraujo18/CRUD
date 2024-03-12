# Node.js CRUD API

Este repositório contém um simples aplicativo CRUD (Create, Read, Update, Delete) usando Node.js para construir a API REST. O objetivo principal é praticar os aprendizados em Node.js, pois estou estudando essa tecnologia.
##Obs: esse repositório será atualizado constantemente.

## Tecnologias Utilizadas

- **Node.js:** Plataforma JavaScript do lado do servidor.
- **Express:** Framework web para Node.js.
- **Sequelize:** ORM (Object-Relational Mapping) para interagir com o banco de dados MySQL.
- **Body-Parser:** Middleware para processar dados do corpo das solicitações.
- **Cors:** Middleware para habilitar o controle de acesso HTTP.
- **Nodemon:** Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina antes de prosseguir.

## Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Instale o Nodemon globalmente (caso ainda não tenha):**

    ```bash
    npm install -g nodemon
    ```

    **Nota:** Se você já tem o Nodemon instalado globalmente, pode pular esta etapa.

## Configuração do Banco de Dados

- Este projeto utiliza o Sequelize como ORM (Object-Relational Mapping) e MySQL como banco de dados. Certifique-se de configurar as credenciais de banco de dados no arquivo `db/conn.js`.

## Execução

Execute o seguinte comando para iniciar o servidor usando Nodemon:

```bash
npm start
