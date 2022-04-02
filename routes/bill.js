const express = require('express');
const router = express.Router();

const billValidator = require('../middleware/validators/billValidator')

const { index, create } = require('../controllers/BillController');
router.route('/').get(index).post(create);
module.exports = router;