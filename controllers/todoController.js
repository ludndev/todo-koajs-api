const Todo = require('./../models/todo');

const controller = {};

controller.index = async (ctx) => {
    try {
        const todos = await Todo.query();
        ctx.status = 200;
        ctx.body = { data: todos };
    } catch (err) {
        console.error(err);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }
};

controller.get = async (ctx) => {
    try {
        const todo = await Todo.query().findById(ctx.params.id);
        if (!todo) {
            ctx.status = 404;
            ctx.body = { message: 'Todo not found' };
        } else {
            ctx.status = 200;
            ctx.body = { data: todo };
        }
    } catch (err) {
        console.error(err);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }
};

controller.create = async (ctx) => {
    try {
        const { title, completed } = ctx.request.body;
        const todo = await Todo.query().insert({ title, completed });
        ctx.status = 201;
        ctx.body = { data: todo };
    } catch (err) {
        console.error(err);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }
};

controller.update = async (ctx) => {
    try {
        const { title, completed } = ctx.request.body;
        const todo = await Todo.query().patchAndFetchById(ctx.params.id, { title, completed });
        if (!todo) {
            ctx.status = 404;
            ctx.body = { message: 'Todo not found' };
        } else {
            ctx.status = 200;
            ctx.body = { todo };
        }
    } catch (err) {
        console.error(err);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }
};

controller.delete = async (ctx) => {
    try {
        const todo = await Todo.query().deleteById(ctx.params.id);
        if (!todo) {
            ctx.status = 404;
            ctx.body = { message: 'Todo not found' };
        } else {
            ctx.status = 204;
        }
    } catch (err) {
        console.error(err);
        ctx.status = 500;
        ctx.body = { message: 'Internal server error' };
    }
};

module.exports = controller;
