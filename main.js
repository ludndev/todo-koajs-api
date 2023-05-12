const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const defaultRoutes = require('./routes/default');


// load .env to process env
dotenv.config();

const app = new Koa();

// apply body parser middleware
app.use(bodyParser());

// apply routes
app.use(defaultRoutes());


app.listen(process.env.APP_PORT);
