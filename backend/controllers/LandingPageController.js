const Banner = require('../models/Bannermodel');
const Store = require('../models/StoreModel');
const YorStoreOfTheDay = require('../models/YorStoreOfTheDayModel');

const LandingPageController = {
    getData: (req, res) => {
        let data = { banner: {}, yorstores: {}, stores: {} };
        Banner.find({}, function(err, docs) {
            if (err) return err;

            data.banner = docs[0].stores;
        })
            .then(
                Store.find({}, { _id: false, enable: false }, function(
                    err,
                    docs
                ) {
                    if (err) return err;
                    data.stores = docs;
                })
            )
            .then(
                YorStoreOfTheDay.find(
                    {},
                    { _id: false, enable: false, city: false },
                    function(err, docs) {
                        if (err) return err;
                        data.yorstores = docs[0];
                    }
                )
            )
            .then(() => {
                console.log(data);
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = LandingPageController;
