const dotenv = require('dotenv');
const Koa = require('koa');


// load .env to process env
dotenv.config();

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});


app.listen(process.env.APP_PORT);
