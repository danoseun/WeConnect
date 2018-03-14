import express from 'express';
import expressValidator from 'express-validator';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

// Setup the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Require the routes
app.use('/api/v1', routes);

// Catch other routes that don't exist
app.all('*', (req, res) => res.status(404).send({
  message: 'Sorry! Page not found',
}));

export default app;
