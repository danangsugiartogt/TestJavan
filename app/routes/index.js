const express        = require('express');
const person         = require('./person/index.js');
const personRelation = require('./person-relation/index.js');
const router         = express.Router();

router.use('/person', person);
router.use('/person-relation', personRelation);

module.exports = router;