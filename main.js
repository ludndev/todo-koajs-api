const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const json = require('koa-json');
const defaultRoutes = require('./routes/default');
const todoRoutes = require('./routes/todo');


// load .env to process env
dotenv.config();

const app = new Koa();

// apply middlewares
app.use(cors());
app.use(json());
app.use(bodyParser());

// apply routes
app.use(defaultRoutes());
app.use(todoRoutes());


app.listen(process.env.APP_PORT);
