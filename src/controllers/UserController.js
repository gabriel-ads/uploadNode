const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('players')
        return res.json(results)
    },
    async questions(req, res, next) {
        const results = await knex('questions')
        return res.json(results)
    },
    async createPlayer(req, res, next) {
        try {
            const { nickname, email, password } = req.body

            await knex('players').insert({
                nickname, email, password
            })
            
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}