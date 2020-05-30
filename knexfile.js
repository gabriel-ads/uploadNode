// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "show_do_milhao",
      user: "postgres",
      password: "Bi3lz1nh0767@"
    },
    migrations:{
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    },
  },
};
