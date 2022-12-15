const express    = require('express');
const { person } = require('../../controllers/index.js');
const router     = express.Router();

router.post('/', person.create);
router.post('/update', person.update);

module.exports = router;
