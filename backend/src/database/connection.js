// Importação e conexão com o banco de dados utilizando knex e sqlite3
const knex = require('knex')
const config = require('../../knexfile')

const connection = knex(config.development)

module.exports = connection