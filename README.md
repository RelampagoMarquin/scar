# scar
Projeto da matéria de tópicos avançados 

Na pasta API você encontrará a estrutura base do projeto

Em pasta prisma você pode ver a estrutura das tabelas e seus respectivos tipos

Cada tabelas está separada por modulos, que o CRUD basico para fazer o teste da API

# Backend
Antes de iniciar configure o ambiente procure o arquivo .env e coloque a senha e usuario local (remover esse passo após implementar o docker) DATABASE_URL="mysql://usuario:password@localhost:3306/scar". Em seguida use o comando: 
```bash
npm i #instala dependencia
npx prisma migrate dev #cria o banco de dados
``` 
para criar as tabelas no banco de dados, após executar pode ser que sejá solicitado um nome para a migração.

Para executar (tem que esta dentro do diretorio), caso seja a primeira vez você deve utilizar primeiro o comando 'npm i' para instalar as dependencias, para inicializar o comando é:

```bash
npm start:dev #inicia o projeto
``` 
acesse http://localhost:3000/api para iniciar o projeto

Há outras formas de inicializar, ex: testes (inicialmente deixei os que vieram com o nest), olhar o README.md dentro da pasta API

# Casos queiram facilitar a visualização do banco de dados, utilize o prisma studio, comando:
```bash
npx prisma studio
``` 

# Front-end

Para excutar entre na pasta 'web' em seguida execute os seguintes comandos:

```bash
npm i #instala dependencia
npm run dev #inicia a aplicação
``` 