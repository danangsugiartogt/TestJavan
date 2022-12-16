const express            = require('express');
const { personRelation } = require('../../controllers/index.js');
const router             = express.Router();

router.get('/', personRelation.index);
router.get('/:id', personRelation.relationById);
router.get('/parent/:id', personRelation.relationByParentId);
router.get('/child/:id', personRelation.relationByChildId);
router.post('/', personRelation.create);
router.post('/update', personRelation.update);
router.delete('/delete/:id', personRelation.deleteByid);
router.delete('/delete-parent/:id', personRelation.deleteByParentId);
router.delete('/delete-child/:id', personRelation.deleteByChildId);

module.exports = router;
