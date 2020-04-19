/**
 * Métodos HTTP: 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * Query Params: parâmetros nomeados enviados na rota após '?' servem para filtros e paginação
 * Route Params: parâmetros para identificar recursos na rota após ':'
 * Request Body: Corpo da requisição, utilizado para criar e alterar recursos   
 */

/**
 * SQL: MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB ... 
 */

// importações
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

app = express()

// Middlewares
app.use(cors()) // determina que aplicação front-end pode acessar a API
app.use(express.json())
app.use(routes)

// server running
app.listen(3333)