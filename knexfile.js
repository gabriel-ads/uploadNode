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
    production:{
        client: 'pg',
      connection: 'postgres://sluubhcatnkdmv:9bae72a9fe970b4b6a6ce95c6d99516b5c4e3052257119820e2d35bc668ef870@ec2-52-202-22-140.compute-1.amazonaws.com:5432/dd5331mvf0bi63',
      migrations:{
        directory: `${__dirname}/src/database/migrations`
      },
      seeds:{
        directory: `${__dirname}/src/database/seeds`
      },
    }
  };