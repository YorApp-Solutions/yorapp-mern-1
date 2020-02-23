const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./dbConfig');
const mongoose = require('mongoose');

const mongoURL = dbConfig.url;

mongoose.connect(mongoURL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('hello');
})

app.get('/number', function(req, res){
    //create a schema
    const userSchema = new mongoose.Schema({
        phone: Number
    });
    //compile the schema
    const User = mongoose.model('User', userSchema, 'users');
    //return users in db and send to browser
    User.find(function(err, user){
        if(err) return console.error(err);
        console.log(user);
        res.send(user);
    })

})


db.once('open', function(){
    app.listen(port, ()=>{
        console.log(`listening at ${port}`)
    })
})
