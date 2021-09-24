# Star war node api
Teamwork is an ​ internal social network for employees of an organization

## Getting Started

---
##### *Prerequisites*
* [node.js](https://nodejs.org/en/download/)
* [postgres](https://git-scm.com/)


##### *Installation*
First, clone the project repo from Github. Then, change directories into the cloned repository. To accomplish this, execute these commands:

`$ git clone https://github.com/boyeoffice/star-war-api.git`

`$ cd star-war-api`

`$ cp .env.example .env`

Now now that you have cloned your repo and changed directories into the project, install the package dependencies.

`$ npm install`

You are now ready to run the program on your local machine.

`$ npm start`

You can now test the api on either postman or insomnia rest api client

[http://localhost:3200](http://localhost:3200)

## Accessing the application

The application is available at http://localhost:3000.

`curl http://localhost:3200`

## Connecting directly to Postgres

You can connect to Postgres using the psql client:

`psql postgres://team:secret@localhost:54321/teamwork`

`docker-compose run teamwork bash`
