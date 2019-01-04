//Mounted on auth/github
const path = require('path')
const router = require('express').Router();

// matches GET requests to /auth/github/
router.get('/', function (request, response, next) { /* etc */});

// matches POST requests to /auth/github/
router.post('/', function (request, response, next) { /* etc */});

// matches PUT requests to /auth/github/:githubId
router.put('/:githubId', function (request, response, next) { /* etc */});

// matches DELETE requests to /auth/github/:githubId
router.delete('/:githubId', function (request, response, next) { /* etc */});

//our server should send its index.html for any requests that don't match one of our auth routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


module.exports = router;
