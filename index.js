const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());


const allChef = require('./data/chef-details.json');
const allRecipes = require('./data/recipes.json');


app.get('/', (req, res) => {
    res.send("Awesome Chef Server Is Running")
});

app.get('/all-chef', (req, res) => {
    res.send(allChef)
});

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const chef = allChef.find(c => c.id == id)
        res.send(chef)
});

app.get('/all-recipes', (req, res)=> {
        res.send(allRecipes);
} );

app.get('/chef-recipe/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const recipe = allRecipes.filter(c => c.categoryId == id)
        res.send(recipe)
});

app.get('/popular-recipe', (req, res) => {
    const popularRecipe = allRecipes.filter(recipe => recipe.popular == true)
    res.send(popularRecipe)
})


app.listen(port, ()=> {
    console.log('Awesome Running on port:', port);
})