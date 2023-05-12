const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const defaultRoutes = require('./routes/default');
const todoRoutes = require('./routes/todo');


// load .env to process env
dotenv.config();

const app = new Koa();

// apply body parser middleware
app.use(bodyParser());

// apply routes
app.use(defaultRoutes());
app.use(todoRoutes());


app.listen(process.env.APP_PORT);
