//Mounted on api/bot
import path from 'path'
const router = require('express').Router();

// matches GET requests to /api/bot/
router.get('/', function (request, response, next) { /* etc */});

// matches POST requests to /api/bot/
router.post('/', function (request, response, next) { /* etc */});

// matches PUT requests to /api/bot/:botId
router.put('/:botId', function (request, response, next) { /* etc */});

// matches DELETE requests to /api/bot/:botId
router.delete('/:adminId', function (request, response, next) { /* etc */});

//our server should send its index.html for any requests that don't match one of our API routes
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;
