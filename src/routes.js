const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/players', UserController.index)
routes.get('/questions', UserController.questions)
// routes.post('/players', UserController.createPlayer)

module.exports = routes