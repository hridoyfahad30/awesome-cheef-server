const express = require('express')

const app = express();
const port = process.env.PORT || 5000;


const allChef = require('./data/chef-details.json');


app.get('/', (req, res) => {
    res.send("Awesome Chef Server Is Running")
});

app.get('/all-chef', (req, res) => {
    res.send(allChef)
});


app.listen(port, ()=> {
    console.log('Awesome Running on port:', port);
})