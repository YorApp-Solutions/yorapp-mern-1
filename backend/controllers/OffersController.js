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
    getStoreOffers: (req, res) => {
        Offers.find({ assign_id: req.params.id }, { _id: false })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = OffersController;
