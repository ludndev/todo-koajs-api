const faker = require('@faker-js/faker');

async function fakerData(total = 10) {
  const todos = [];

  for (let i = 0; i < total; i++) {
    todos.push({
      title: faker.faker.lorem.sentence(),
      completed: faker.faker.datatype.boolean(),
    });
  }

  return todos;
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  let data = await fakerData(10);
  // deletes all existing entries
  await knex('todos').del();
  // insert new values
  await knex('todos').insert(data);
};
