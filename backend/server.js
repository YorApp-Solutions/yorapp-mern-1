const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./dbConfig');
const mongoose = require('mongoose');
//const landingPageRouter = require('./routes/landingPageRoutes');
const bannerRouter = require('./routes/bannerRoutes');
const yorStoreRouter = require('./routes/yorStoreRoutes');
const offersRouter = require('./routes/offerRoutes');
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
//app.use('/api/landingPage', landingPageRouter);
app.use('/api/banner', bannerRouter);
app.use('/api/yorStores', yorStoreRouter);
app.use('/api/offers', offersRouter);

app.use(express.static(path.resolve(__dirname, '../dist')));

db.once('open', function() {
    app.listen(port, () => {
        console.log(`listening at ${port}`);
    });
});
