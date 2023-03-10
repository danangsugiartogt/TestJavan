const express    = require('express');
const { person } = require('../../controllers/index.js');
const router     = express.Router();

router.get('/', person.index);
router.get('/:id', person.person);
router.post('/', person.create);
router.post('/update', person.update);

module.exports = router;
