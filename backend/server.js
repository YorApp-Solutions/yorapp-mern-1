const express = require('express');

const app = express();

const port = 8000;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('hello');
})

app.listen(port, ()=>{
    console.log(`listening at ${port}`)
})