//anything here is already mounted on the '/auth' route
const router = require('express').Router();
const path = require('path')

router.use('/google', require('./google')); // matches all requests to /auth/google
router.use('/facebook', require('./facebook')); // matches all requests to /auth/facebook
router.use('/github', require('./github')); // matches all requests to /auth/github

//404 error handling middleware for any route that does not exist.
router.use(function (request, response, next) {
    const error = new Error('Not Found.');
    error.status = 404;
    next(error);
});

//our server should send its index.html for any requests that don't match one of our auth routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;
