const StoreDetails = require('../models/StoreDetailsModel');

const StoreDetailsController = {
    getData: (req, res) => {
        StoreDetails.find(
            { assign_id: req.params.id },
            {
                _id: false,
                password: false,
                enable: false,
                followers: false,
                affiliated_members: false,
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

module.exports = StoreDetailsController;
