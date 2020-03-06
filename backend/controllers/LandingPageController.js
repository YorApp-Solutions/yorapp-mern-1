const Store = require('../models/StoreModel');

const LandingPageController = {
    getData: (req, res) => {
        Store.find({}, { _id: false, enable: false })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = LandingPageController;
