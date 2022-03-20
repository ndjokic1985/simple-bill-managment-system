const BillType = require('../models/BillType');

const index = async(req, res) => {
    try {
        const {
            search,
            skip,
            limit
        } = req.query;
        const billTypes = await BillType.find({
            name: { $regex: search }
        }).skip(skip).limit(limit);

        res.status(200).json({
            msg: 'success',
            data: billTypes
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const create = async(req, res) => {
    try {
        const billType = await BillType.create(req.body);
        res.status(201).json({ msg: 'success', data: billType })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const view = async(req, res) => {
    try {
        const { id } = req.params;
        const billType = await BillType.findById(id);
        if (!billType) {
            return res.status(404).json({
                msg: `Bill type with ${id} not found`
            });
        }
        res.status(200).json({
            msg: 'success',
            data: billType
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const remove = async(req, res) => {
    try {
        const { id } = req.params;
        const billType = await BillType.findByIdAndRemove(id);
        if (!billType) {
            return res.status(404).json({
                msg: `Bill type with ${id} not found`
            });

        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const billType = await BillType.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!billType) {
            return res.status(404).json({
                msg: `Bill type with ${id} not found`
            });
        }
        res.status(200).json({
            data: billType
        });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};
module.exports = {
    index,
    create,
    view,
    remove,
    update
}