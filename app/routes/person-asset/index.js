const express            = require('express');
const { personAsset }    = require('../../controllers/index.js');
const router             = express.Router();

router.get('/', personAsset.index);
router.get('/:id', personAsset.assetById);
router.get('/person/:id', personAsset.assetByPersonId);
router.post('/', personAsset.create);
router.post('/update', personAsset.update);
router.delete('/delete/:id', personAsset.delete);

module.exports = router;
