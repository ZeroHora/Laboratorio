const connectionDB = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST ||  '127.0.0.1',
      user :  process.env.DB_USER || 'root',
      password : process.env.DB_PASS || 'adm1234',
      database :  process.env.DB_DATABASE || 'estudo'
    }
  })

  module.exports = connectionDB;