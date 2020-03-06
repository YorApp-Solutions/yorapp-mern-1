const Store = require('../models/YorStoreOfTheDayModel');

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
};

module.exports = StoreController;
