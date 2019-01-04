//anything here is already mounted on the '/api' route
const router = require('express').Router();
const path = require('path')

router.use('/user', require('./user')); // matches all requests to /api/user/
router.use('/admin', require('./admin')); // matches all requests to /api/admin/
router.use('/bot', require('./bot')); // matches all requests to /api/bot/

//404 error handling middleware for any route that does not exist.
router.use(function (request, response, next) {
    const error = new Error('Not Found.');
    error.status = 404;
    next(error);
});

//our server should send its index.html for any requests that don't match one of our API routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;
