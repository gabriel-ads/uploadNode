const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/players', UserController.index)
routes.post('/questions', UserController.questions)
routes.post('/players', UserController.createPlayer)
routes.post('/logon', UserController.logon)
routes.put('/players', UserController.updateScore)
routes.post('/players', UserController.ValidaEmail)
routes.put('/players', UserController.updateSenha)

module.exports = routes