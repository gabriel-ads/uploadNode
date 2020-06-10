const knex = require('../database')

module.exports = {
    async index(req, res) {
        console.log(process.env.DATABASE_URL)
        const results = await knex('players')
        return res.json(results)
    },

    async logon(req, res, next) {
        try {
            const { email, password } = req.body

            const results = await knex('players').where({
                email, password
            })
            return res.json(results)

        } catch (error) {
            next(error)
        }
    },

    async questions(req, res, next) {
        try {
            const { id } = req.body

            const results = await knex('questions').where({
                id
            })
            return res.json(results)
        } catch (error) {
            next(error)
        }

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
    },
    async updateScore(req, res, next) {
        try {
            const { nickname, score } = req.body
            await knex('players')
                .update({ score }).where({
                    nickname
                })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async ValidaEmail(req, res, next) {
        try {
            const { email } = req.body
            const results = await knex('players').where({
                email
            })
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async updateSenha(req, res, next) {
        try {
            const { email, password } = req.body
            await knex('players')
                .update({ password }).where({
                    email
                })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async ranking(req, res, next){
        try {
            const results = await knex('players')
            .orderBy('score', 'desc')
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
}