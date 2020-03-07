const Store = require('../models/StoreModel');

const StoreController = {
    getStores: (req, res) => {
        Store.find({})
            .then((result) => {
                res.json({ result });
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
    getStore: (req, res) => {
        Store.find(
            { assign_id: req.params.id },
            {
                _id: false,
                enable: false,
            }
        )
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = StoreController;
