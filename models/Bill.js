const mongoose = require('mongoose');
const BillType = require('./BillType');
const Schema = mongoose.Schema
const BillSchema = new Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    billType: {
        type: Schema.Types.ObjectId,
        required: [true, 'Bill Type is required'],
        validate: {
            validator: async(value) => await BillType.findById(value.toString()) !== null,
            message: "Bill Type you provide is not valid"
        }

    },
    period: {
        type: Date,
        required: [true, 'Period is required'],
    },
});

module.exports = mongoose.model('Bill', BillSchema);