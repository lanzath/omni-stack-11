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