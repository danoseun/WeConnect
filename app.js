import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';


// Setup the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.all('*', (req, res) => res.status(200).send({
  message: 'Welcome to weconnect app',
}));

export default app;
