# Node API - Lesson - GoBarber
<div align="center" style="margin-bottom: 20px;">
<img alt="gobarber" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">

<p align="center" >
  <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
  <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
  <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a>
</p>

</div>

## :barber: O projeto

Aplicação para agendar e gerenciar serviços de beleza, onde prestadores de serviços podem se cadastrar,
e usuários poderão marcar agendamentos com estes provedores.

## :fire: Prévia da Aplicação

<div align="center">
<img src="https://media.giphy.com/media/Lm6bmg75wR7Llcf9JG/giphy.gif" alt="preview"/>
</div>

### :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
{...}

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone https://github.com/ayrtonbsouza/gs-backend-ts-node-gobarber-lesson.git
$ cd gs-mobile-reactnative-concepts-lesson
```
#### Iniciando a API
```sh
$ cd api

# Criando a imagem Docker do banco de dados:
# Dentro do projeto, já existe uma arquivo docker-compose.yml que possui o
# PostgreSQL como banco de dados, basta ter o Docker instalado em sua máquina.
$ docker-compose up -d # Iniciará em background e não irá bloquear o shell

# Rodando as migrations para o banco de dados e iniciando o projeto
$ yarn && yarn typeorm migration:run && yarn dev:server
```

### :memo: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.


Made with ❤️ by **Ayrton Souza** :wave: [Get in touch!](https://www.linkedin.com/in/ayrtonsouza)
