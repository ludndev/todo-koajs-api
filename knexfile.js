// noinspection SpellCheckingInspection

const dotenv = require('dotenv');
const { knexSnakeCaseMappers } = require('objection');

// load .env to process env
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env["DATABASE_NAME"],
      host: process.env["DATABASE_HOST"],
      user: process.env["DATABASE_USER"],
      password: process.env["DATABASE_PASS"],
      ssl: process.env["DATABASE_SSL"] === "true",
      sslmode: process.env["DATABASE_SSL"] === "true" ? 'require' : undefined
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds : {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers()
  }
};
