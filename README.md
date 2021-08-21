## Quikdev Teste prático

### Requisitos

- Docker version: 20.10.7
- Docker compose version: 1.29.2
- PHP image docker: php:7.4-fpm
- Nginx image docker: nginx/alpine 
- Laravel: 8
- Node: 14.17.1

### Objetivo

Desenvolver um projeto que consome as informações de <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie DB API</a>

Requisitos do teste:
- Front-end:
    - Desenvolver uma página/componente para listar os filmes mais populares;
    - Fazer filtro de busca ou por gênero;
    - Desenvolver tela de detalhes do filme.
- Back-end:
    - Desenvolver REST API para se comunicar com a API de terceiros e retornar para o front-end.
- Extras:
    - Construir testes;
    - Utilizar algum framework no back-end
    - Utilizar docker

### Instalação e configuração

Para instalar o projeto primeiro clone este repositório e entre na branch develop:

<code>git clone https://github.com/JoaoVictorViana/quikdev-test</code>

<code>git fetch</code>

<code>git checkout develop</code>

É possivel subir toda a aplicação utilizando o docker. Para isso utilize o seguinte comando:

<code>docker-compose up -d</code>

Obs: Caso não queira utilizar o docker, todos os comandos as seguir serão utilizados da mesma maneira, no entanto, será necessário ter instalado a versão 7.4 do PHP e 14.17.1 do Node.

Logo em seguida crie o arquivo .env e coloque a API_KEY disponibilizada no teste na variável API_KEY_MOVIE. 

Apos subir os dois containers (laravel-app e nginx), entre no container do laravel-app, e execute os seguintes comandos:

<code>composer install</code>

<code>php artisan key:generate</code>

<code>npm install</code>

<code>npm run build</code>

Para executar todos os testes, execute o seguinte comando:

<code>php artisan test</code>
