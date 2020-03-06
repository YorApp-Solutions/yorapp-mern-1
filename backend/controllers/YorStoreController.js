const YorStoreOfTheDay = require('../models/YorStoreOfTheDayModel');

const YorStoreController = {
    getData: (req, res) => {
        YorStoreOfTheDay.find({}, { _id: false, enable: false, city: false })

            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = YorStoreController;
