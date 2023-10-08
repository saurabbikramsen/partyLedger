
# Party Ledger


## Prerequisite

- nodejs v-16 or higher
- docker

## How To Get Started


- Copy the variables in example.env to .env file
- Install and run postgres in docker,
- Use the reference docker-compose.yml file for running postgres in docker.
  - use your own username, password, and set port to 5432:5432
  - use code $ docker compose up -d
- In the env file
    - For DATABASE_URL variable, Change the username, password, and port as your postgres setup  and provide a dbname.
    - Set your 'ACCESS_TOKEN_SECRET' AND 'REFRESH_TOKEN_SECRET'
    - provide expiry time for access and refresh token
    - Set an appropriate port number for nest-app
    - Install all packages
    - Apply all the migrations using command below.
    - Run the app using yarn start:dev for development mode.

- After running locally '/api' is the route for swagger documentation.

- now you can log in as admin and get access token and refresh token to perform other tasks.
- Create customers and add transactions and money paid.


## Installation

```bash
  # install all packages
  $ yarn
```

```bash
  # apply all migrations
  $ prisma migrate dev
```



## Run Locally


```bash
  # watch mode
  $ yarn start:dev
```


```bash
  # to view database data
  $ npx prisma studio
  ````

```bash
  # build mode
  $ nest build
```

```bash
  # production mode
  $ yarn start:prod
```


