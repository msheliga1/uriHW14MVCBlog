// MJS 3.4.24 - From Act 14-28 mp - controllers/index.js file. Points to /api folder and /homeRoutes file.
// Import just the router express
console.log("Starting controller/index.js ");
const router = require('express').Router();

// Also seem to be missing homepage route here!! At night 3.4.24.
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

// Import the index.js from 'api' folder
const apiRoutes = require('./api');
// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);

// To make getting something - anything to work put a route here!! 
// And comment out everything else. 
router.get('/root', async (req, res) => {
    try {
        res.status(200).json("MJS root route in controller/index found! This is PROGRESS believe it or not!");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
