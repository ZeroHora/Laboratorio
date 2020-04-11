const connectionDB = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'adm1234',
      database : 'estudo'
    }
  })

  module.exports = connectionDB;