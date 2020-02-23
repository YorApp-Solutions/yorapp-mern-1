const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('hello');
})

app.listen(port, ()=>{
    console.log(`listening at ${port}`)
})