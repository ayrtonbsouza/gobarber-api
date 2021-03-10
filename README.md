
![readme-headers_GoStack-Node](https://user-images.githubusercontent.com/30063455/110576974-78d44780-8140-11eb-83e0-bca9bef1cd52.png)

# GoBarber - API

This is the code of my personal landing page. It's open source, anyone can see how I developed my page.

![2021-03-09 23 31 55](https://media.giphy.com/media/Lm6bmg75wR7Llcf9JG/giphy.gif)

## About this code

It was developed using Node and TypeScript. This project was developed during RocketSeat's GoStack Bootcamp and it's used as back-end on GoBarber Application. You can find the React web application [here](https://github.com/ayrtonbsouza/gobarber-web) and the React Native mobile application [here](https://github.com/ayrtonbsouza/gobarber-mobile)

### Tech Stack

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
{...}

## Starting Application

```sh
$ cd gobarber-api

# Creating the database Docker image:
# Within the project, there is already a docker-compose.yml file that has the
# PostgreSQL as a database, just have Docker installed on your machine.
$ docker-compose up -d # Will start in the background and will not block the shell

# Running migrations to the database and starting the project
$ yarn && yarn typeorm migration:run && yarn dev:server
```

## Run Project

The second thing is run the project, you can do it by running the following command on your terminal:

```yarn dev:server```

## License

This project is developed under MIT License. See [LICENSE](LICENSE.md) file to know more details.


Made with ❤️ by **Ayrton Souza** :wave: [Get in touch!](https://ayrtonsouza.com/)
