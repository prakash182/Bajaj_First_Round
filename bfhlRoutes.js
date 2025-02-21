const express = require('express');
const { getOperationCode, postProcessData } = require('../controllers/bfhlController');

const router = express.Router();

router.get('/', getOperationCode);
router.post('/', postProcessData);

module.exports = router;
