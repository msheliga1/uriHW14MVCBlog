// MJS 3.4.24 - Controllers/api/index.js from Act 14-28 mp. 
console.log("Starting controller/api/index.js");
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
