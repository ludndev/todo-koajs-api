const { Model } = require('objection');

const Knex = require('knex');
const knexConfig = require('./../knexfile');
Model.knex(Knex(knexConfig.development));

class Todo extends Model {
    static get tableName() {
        return 'todos';
    }
}

module.exports = Todo;
