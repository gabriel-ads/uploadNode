const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes.get('/players', UserController.index)
routes.get('/questions', UserController.questions)
// routes.post('/players', UserController.createPlayer)

module.exports = routes