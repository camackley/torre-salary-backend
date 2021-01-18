# [Torre Salary Api](https://torre-salary.web.app/)

Web Service to process data for **Torre Salary**, This is fed by Torre data from open Api, with this project We can know what is the aspire salary for us,based average of opportunities offers
__________

## Index

- [Torre Salary Api](#torre-salary-api)
  - [Index](#index)
  - [Project description](#project-description)
  - [Start local server](#start-local-server)
  - [Deploy in the cloud](#deploy-in-the-cloud)
    - [Url servicios Web](#url-servicios-web)

__________

## Project description

The project was built with [Node.js](https://nodejs.org/es/) [V11.8.0](https://nodejs.org/dist/v11.8.0/) using **npm** as package manager ([packages.json](./package.json)), this project also implements express to build the server.

The project use [Heroku](https://heroku.com) as hosting for deploy our server in the cloud.
__________

## Start local server

1) In the **CMD**, run

        npm run server

## Deploy in the cloud

1) Save all changes in [Git](https://git-scm.com/)
2) Merge in the **master** branch
3) Send changes to remote repository

        git push origin <branchs>

4) Send changes to heroku remote

        git push heroku <branch || master>

### Url servicios Web

        https://torre-salary-backend.herokuapp.com/state
