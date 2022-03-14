const express = require('express');
const router = express.Router();

const {
    index,
    create,
    update,
    remove,
    view
} = require('../controllers/BillTypeController');

router.route('/').get(index).post(create);
router.route('/:id').patch(update).delete(remove).get(view)


module.exports = router;