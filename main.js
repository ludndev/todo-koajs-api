const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');


// load .env to process env
dotenv.config();

const app = new Koa();

// apply body parser middleware
app.use(bodyParser());

app.use(async ctx => {
    ctx.body = 'Hello World';
});


app.listen(process.env.APP_PORT);
