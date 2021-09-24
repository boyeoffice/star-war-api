# Star war node api

Visit the live api:

`https://starwarb-api.herokuapp.com`

## Getting Started

---
##### *Prerequisites*
* [node.js](https://nodejs.org/en/download/)
* [postgres](https://www.postgresql.org/download/)


##### *Installation*
First, clone the project repo from Github. Then, change directories into the cloned repository. To accomplish this, execute these commands:

`$ git clone https://github.com/boyeoffice/star-war-api.git`

`$ cd star-war-api`

`$ cp .env.example .env`

Now now that you have cloned your repo and changed directories into the project, install the package dependencies.

`$ npm install`

To migrate database

`$ npm run migrate`

To rollback database

`$ npm run migrate:rollback`

You are now ready to run the program on your local machine.

`$ npm start`

You can now test the api on either postman or insomnia rest api client

[http://localhost:3200](http://localhost:3200)

## Accessing the application

The application is available at http://localhost:3000.

`$ curl http://localhost:3200`

## Run application on docker

`$ cp .evn.example .env`

To start containers

`$ docker-compose up -d`

To stop containers

`$ docker-compose stop`

To migrate database

`$ docker-compose run --rm npm run migrate`

To rollback database

`$ docker-compose run --rm npm run migrate:rollback`


## Base URL

`https://starwarb-api.herokuapp.com/api/v1`

## Movies

Get list of movies

#### Endpoints

* `/movies`

Example request:

`https://starwarb-api.herokuapp.com/api/v1/movies`

Example response:

```json 
{
  "status": "success",
  "message": null,
  "count": 6,
  "data": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25"
    }
  ],
  "version": "1.0.0"
}
```

## Characters

Get list of characters

#### Endpoints

* `/people`

Example request:

`https://starwarb-api.herokuapp.com/api/v1/people`

### Query parameters

* column
* search_query

Example request:

`https://starwarb-api.herokuapp.com/api/v1/people?column=name&search_query=Owen Lars`

Example response:

```json 
{
  "status": "success",
  "message": null,
  "count": 6,
  "data": [
    {
      "name": "Owen Lars",
      "height": "178",
      "height_in_feet": "5.84",
      "mass": "120",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "52BBY",
      "gender": "male"
    }
  ],
  "version": "1.0.0"
}
```

## Comment

Post comment

#### Endpoints

* `/comments`

Example request:

method: POST

`https://starwarb-api.herokuapp.com/api/v1/comments`

Example response:

```json 
{
  "status": "success",
  "message": "comment was created successfully.",
  "count": 0,
  "data": null,
  "version": "1.0.0"
}
```

List all comments

#### Endpoints

* `/comments`

Example request:

method: GET

`https://starwarb-api.herokuapp.com/api/v1/comments`

Example response:

```json 
{
  "status": "success",
  "message": "comment was fetched successfully.",
  "count": 1,
  "data": [
    {
      "id": 237104,
      "comment": "Hey! This is my first comment",
      "ip": "102.89.1.195",
      "created_on": "2021-09-24T06:50:19.244Z",
      "status": 1
    }
  ],
  "version": "1.0.0"
}
```

