const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/players', UserController.index)
routes.get('/questions', UserController.questions)
routes.post('/players', UserController.createPlayer)
routes.post('/logon', UserController.logon)

module.exports = routes