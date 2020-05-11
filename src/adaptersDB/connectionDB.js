const connectionDB = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST ||  'localhost',
      user :  process.env.DB_USER || 'root',
      password : process.env.DB_PASS || 'admin123',
      database :  process.env.DB_DATABASE || 'Exemplo'
    }
  })

  module.exports = connectionDB;