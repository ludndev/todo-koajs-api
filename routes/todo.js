const Router = require('koa-router');
const controller = require('./../controllers/todoController');

const router = new Router();

router.get('/todo', controller.index);
router.get('/todo/:id', controller.get);
router.post('/todo', controller.create);
router.put('/todo/:id', controller.update);
router.del('/todo/:id', controller.delete);

module.exports = () => {
    return router.routes();
};
