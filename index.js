const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());


const allChef = require('./data/chef-details.json');


app.get('/', (req, res) => {
    res.send("Awesome Chef Server Is Running")
});

app.get('/all-chef', (req, res) => {
    res.send(allChef)
});

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id);

    const chef = allChef.find(c => c.id == id)
        res.send(chef)
});


app.listen(port, ()=> {
    console.log('Awesome Running on port:', port);
})