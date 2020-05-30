const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('players')

        return res.json(results)
    }
}