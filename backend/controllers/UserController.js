const User = require('../models/UserModel');

const UserController = {
    getUser: (req, res) => {
        User.find({})
            .then(result => {
                res.json({ result });
            })
            .catch(err => {
                res.status(500).send(err.message);
            });
    },
};

module.exports = UserController;
