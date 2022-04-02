const Bill = require('../models/Bill');

const index = async(req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json({ msg: 'sucess', data: bills })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const create = async(req, res) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(201).json({ msg: 'sucess', data: bill })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    index,
    create
}