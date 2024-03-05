// MJS 3.4.24 - From Act 14-28 mp - controllers/index.js file. Mainly points to /api
// Import just the router express
console.log("Starting controller/index.js ");
const router = require('express').Router();
// Import the index.js from 'api' folder
const apiRoutes = require('./api');

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);

module.exports = router;
