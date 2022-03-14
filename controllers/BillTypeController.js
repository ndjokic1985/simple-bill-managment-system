const index = (req, res) => {
    res.status(200);
    res.json({ message: "All items!" });
};

const create = (req, res) => {
    res.status(201);
    res.json({ message: "Item has been created!" });
};

const view = (req, res) => {
    res.status(200);
    res.json({ message: "Item detail!" });
};

const remove = (req, res) => {
    res.status(204);
    res.json({ message: "Item has been deleted!" });
};

const update = (req, res) => {
    res.status(200);
    res.json({ message: "Item has been updated!" });
};
module.exports = {
    index,
    create,
    view,
    remove,
    update
}