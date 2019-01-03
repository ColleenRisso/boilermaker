//Mounted on api/user
import path from 'path'
const router = require('express').Router();

// matches GET requests to /api/user/
router.get('/', function (request, response, next) { /* etc */});

// matches POST requests to /api/user/
router.post('/', function (request, response, next) { /* etc */});

// matches PUT requests to /api/user/:userId
router.put('/:userId', function (request, response, next) { /* etc */});

// matches DELETE requests to /api/user/:userId
router.delete('/:userId', function (request, response, next) { /* etc */});

//our server should send its index.html for any requests that don't match one of our API routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


module.exports = router;
