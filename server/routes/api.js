const express = require('express')
const { now } = require('jquery')
const router = express.Router()
const urllib = require('urllib')

router.get('/sanity', function (req, res) {

    res.send("ok")
})

router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    console.log(ingredient);

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data, response) => {
        const dataRes = JSON.parse(data)
        let id = 0
        const recipes = dataRes.results.map( r => {
            id++
            return {
                title: r.title,
                ingredients: r.ingredients,
                href: r.href,
                thumbnail: r.thumbnail,
                id:  `${ingredient}${id}`
            }
        })
        console.log(recipes);
        res.send(recipes)
    })

})

module.exports = router