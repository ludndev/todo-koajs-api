const app = require('../app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Todo API', () => {
    let id = null;

    describe('GET /todo', () => {
        it('should return a list of todos', (done) => {
            request(app.callback())
                .get('/todo')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property('data');
                    expect(res.body.data).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /todo', () => {
        it('should create a new todo', (done) => {
            const todo = { title: 'New Todo', completed: false };
            request(app.callback())
                .post('/todo')
                .send(todo)
                .end((err, res) => {
                    expect(res.status).to.equal(201);
                    expect(res.body).to.have.property('data');
                    expect(res.body.data.title).to.equal(todo.title);
                    expect(res.body.data.completed).to.equal(todo.completed);
                    id = res.body.data.id;
                    done();
                });
        });
    });

    describe('PUT /todo/:id', () => {
        it('should update an existing todo', (done) => {
            const todo = { title: 'Updated Todo', completed: true };
            request(app.callback())
                .put(`/todo/${id}`)
                .send(todo)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property('data');
                    expect(res.body.data.title).to.equal(todo.title);
                    expect(res.body.data.completed).to.equal(todo.completed);
                    done();
                });
        });
    });

    describe('DELETE /todo/:id', () => {
        it('should delete an existing todo', (done) => {
            request(app.callback())
                .delete(`/todo/${id}`)
                .end((err, res) => {
                    expect(res.status).to.equal(204);
                    done();
                });
        });
    });
});
