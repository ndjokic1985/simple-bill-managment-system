const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const BillTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        unique: true,
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
});

BillTypeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('BillType', BillTypeSchema)