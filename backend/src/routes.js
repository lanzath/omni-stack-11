// imports
const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// routes utilizará módulo Router do express
const routes = express.Router()

// Login
routes.post('/sessions', SessionController.create)

// Rotas do CRUD de ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// Rota para listagem de casos de uma ong em específico
routes.get('/profile', ProfileController.index)

// Rotas do CRUD de casos
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

// exportação das rotas
module.exports = routes