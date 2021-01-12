# PostgresDataSource

for apollo-server, combine [Postgres.js](https://github.com/porsager/postgres) with logical of [SQLDataSource](https://github.com/cvburgess/SQLDataSource)


## Getting Started

### Installation

To install: `npm i postgresdatasource`

### Usage

```js
// postgresDB.js

const { PostgresDataSource } = require('postgresdatasource')

class PostgresDB extends SQLDataSource {
  getUsers() {
    return this.db`
      select *
      from "user".users
    `
  }
}

module.exports = PostgresDB;
```

And use it in your Apollo server configuration:

```js
// index.js

const PostgresDB = require("./postgresDB");
const db = new PostgresDB(postgresUrl, postgresConfig);
// you can pass a Postgres.js instance or other db instance instead of a configuration object

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache,
  context,
  dataSources: () => ({ PostgresDB })
});
```
