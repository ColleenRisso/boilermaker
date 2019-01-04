const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')));

//404 error handling middleware for any route that does not exist.
app.use(function (request, response, next) {
    const error = new Error('Not Found.');
    error.status = 404;
    next(error);
});

//our server should send its index.html for any requests that don't match one of our API routes
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//500 error handing middleware, the error is on our part.
app.use(function (error, req, res, next) {
    console.error(error);
    console.error(error.stack);
    res.status(error.status || 500).send(error.message || 'Internal server error.');
  });

const port = process.env.PORT || 7777; // this can be very useful if you deploy to Heroku!
  app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  });
