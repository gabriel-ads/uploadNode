const knex = require('../database')

module.exports = {
    async index(req, res) {
        console.log(process.env.DATABASE_URL)
        const results = await knex('players')
        return res.json(results)
    },

    async logon(req, res,next) {
        try {
            const { email, password } = req.body

            const results = await knex('players').where({
                email , password
            })
            return res.json(results)

        } catch (error) {
            next(error)
        }
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