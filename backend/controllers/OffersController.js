const Offers = require('../models/OffersModel');

const OffersController = {
    getData: (req, res) => {
        Offers.find({}, { _id: false })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = OffersController;
