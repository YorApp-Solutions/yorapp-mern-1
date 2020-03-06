const Banner = require('../models/BannerModel');

const BannerController = {
    getData: (req, res) => {
        Banner.find({}, { _id: false, city: false })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = BannerController;
