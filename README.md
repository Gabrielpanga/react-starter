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

## Continuous Integration

For continuous integration we have opted to use Azure Pipelines,
the reason for it is that we are going to use all azure services and the integration is very smooth.

### Introduction

**Azure Pipelines** is a integration provided directly into Github that creates a CI/CD environment for Builds/Releases in each case.
It provides a easy and friendly UI to crete builds, track their progress, issues and understand what is being released.
After installing Azure Pipelines on the repository we are going to be redirected to a **Azure DevOps portal**, this will be where we are going to manage everything for that user.

### Configuration

Even though configurations can be done using the UI provided by **Azure DevOps**, we opt to use yml files like `test-pipeline.yml` or `build-pipeline.yml`.
The reasoning is to track the configuration and easily migrate to any other repository or project.
Also we can provide different configurations for different providers and the base project will be capable of be deployed to any of the available providers.

#### Create build in Azure DevOps.

When creating a new build, we can import settings from a **yml** file, use the `test-pipeline.yml` as the config file and will import use those tasks to provide the build steps.

#### Test configuration

For the test steps we have provided a basic node js testing flow.
The app project will be build using nodejs (currently docker test are not supported) and validate that the build is working as expected.
Then will validate tests and lint.
In the case of environment variables, for security reasons, it should be stored on the **Azure DevOps portal** to avoid having those variables in plain text on the repository.
