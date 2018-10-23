// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/todo',
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'todo',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

   production: {
     client: 'postgresql',
     connection: process.env.DATABASE_URL + '?ssl=true',
   }

};
