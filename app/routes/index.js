const express    = require('express');
const person     = require('./person/index.js');
const router     = express.Router();

router.use('/person', person);

module.exports = router;