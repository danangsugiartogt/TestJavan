const express           = require('express');
const { priceService }  = require('../../controllers/index.js');
const router            = express.Router();

router.get('/:personId', priceService.getPrice);

module.exports = router;