const express        = require('express');
const person         = require('./person/index.js');
const personRelation = require('./person-relation/index.js');
const asset          = require('./asset/index.js');
const personAsset    = require('./person-asset/index.js');
const priceRoute     = require('./asset-price/index.js');
const router         = express.Router();

router.use('/person', person);
router.use('/person-relation', personRelation);
router.use('/asset', asset);
router.use('/person-asset', personAsset);
router.use('/asset-price', priceRoute);

module.exports = router;