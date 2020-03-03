const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./dbConfig');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const storeRouter = require('./routes/storeRoutes');
const path = require('path');

const mongoURL = dbConfig.url;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/user', userRouter);
app.use('/api/store', storeRouter);

app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/number', function(req, res){
//     //create a schema
//     const userSchema = new mongoose.Schema({
//         phone: Number
//     });
//     //compile the schema
//     const User = mongoose.model('User', userSchema, 'users');
//     //return users in db and send to browser
//     User.find(function(err, user){
//         if(err) return console.error(err);
//         console.log(user);
//         res.send(user);
//     })

// })

db.once('open', function() {
    app.listen(port, () => {
        console.log(`listening at ${port}`);
    });
});
