//Mounted on auth/facebook
const path = require('path')
const router = require('express').Router();

// matches GET requests to /auth/facebook/
router.get('/', function (request, response, next) { /* etc */});

// matches POST requests to /auth/facebook/
router.post('/', function (request, response, next) { /* etc */});

// matches PUT requests to /auth/facebook/:facebookId
router.put('/:facebookId', function (request, response, next) { /* etc */});

// matches DELETE requests to /auth/facebook/:facebookId
router.delete('/:facebookId', function (request, response, next) { /* etc */});

//our server should send its index.html for any requests that don't match one of our auth routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


module.exports = router;
