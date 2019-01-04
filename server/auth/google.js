//Mounted on auth/google
const path = require('path')
const router = require('express').Router();

// matches GET requests to /auth/google/
router.get('/', function (request, response, next) { /* etc */});

// matches POST requests to /auth/google/
router.post('/', function (request, response, next) { /* etc */});

// matches PUT requests to /auth/google/:googleId
router.put('/:googleId', function (request, response, next) { /* etc */});

// matches DELETE requests to /auth/google/:googleId
router.delete('/:googleId', function (request, response, next) { /* etc */});

//our server should send its index.html for any requests that don't match one of our auth routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


module.exports = router;
