# React project starter

## 👋 Intro

This is React project starter. Its goal is to offer a simple way to start a new front-end application. It offers:

- Components
- Pages
- Models
- GraphQL 
- Environment specific configurations
- Docker development environment
- Tests

## Running the project

### Requirements

We recommend running this project using [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).  
But if you want to run it by yourself you'll need to have [Node.js](https://nodejs.org/en/download/) installed.

### Getting started
1. Clone the project.
2. Copy the `.env.example` file into an `.env` file with your ENV variables.
3. Run the docker container with `sh bin/docker/start.sh`.
4. Go to your browser and access `http://localhost:3000`.

## Scripts

### Shell Scripts
Inside the `bin` folder you'll find a set of helpful scripts that you can use to speedup the development setup.

- `bin/docker/dev.sh`: Runs the Docker Compose container and creates a bash session.
- `bin/docker/start.sh`: Runs the Docker Compose container and after starts the app.

You can run any shell script with: 
```shell
sh <script>
```

### NPM Scripts

The project comes with multiple `package.json` scripts created to run useful commands.

- `start`: Runs the app in the development mode.
- `build`: Builds the app for production to the `build` folder ([More info](https://facebook.github.io/create-react-app/docs/deployment)).
- `docker:build`: Builds the Docker Container.
- `docker:dev`: Starts the Docker Container and creates a bash session.
- `docker:start`: Starts the Docker Container and runs the app.
- `docker:stop`: Stops the Docker container.
- `lint`: Runs the eslint tool
- `lint:fix`: Runs the eslint tool and fix possible offenses.
- `prettier:format`: Properly formats all our code.
- `test`: Runs all tests
- `test:watch`: Launches the test runner in the interactive watch mode.

You can run any NPM script with: 
```shell
npm <script>
```
