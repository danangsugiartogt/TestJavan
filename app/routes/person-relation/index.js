const express            = require('express');
const { personRelation } = require('../../controllers/index.js');
const router             = express.Router();

router.get('/', personRelation.index);
router.get('/:id', personRelation.relationById);
router.get('/parent/:id', personRelation.relationByParentId);
router.get('/child/:id', personRelation.relationByChildId);
router.post('/', personRelation.create);
router.post('/update', personRelation.update);
router.delete('/delete/:id', personRelation.delete);

module.exports = router;
