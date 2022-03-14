const mongoose = require('mongoose');
const BillTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'Name canno be more than 20 characters']
    },
});

module.exports = mongoose.model('BillType', BillTypeSchema)