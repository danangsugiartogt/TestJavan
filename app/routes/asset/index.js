const express    = require('express');
const { asset }  = require('../../controllers/index.js');
const router     = express.Router();

router.get('/', asset.index);
router.get('/:id', asset.asset);
router.post('/', asset.create);
router.post('/update', asset.update);

module.exports = router;