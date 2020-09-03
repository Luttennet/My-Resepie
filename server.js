const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

// app.get('/sanity', function (req, res) {
//     res.send("OK!")
// })

app.get('/recipes/:ingredient', function (request, response) {
    const ingredients = request.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredients}`, function (err, data, res) {
        if (err) {
            response.send("ERROR servers.js line 16")
        }
        const useableData = JSON.parse(data.toString())
        const messRecipeData = useableData.results
        const recipeData = messRecipeData.map(r => {return {ingredient: r.ingredients, title: r.title, thumbnail: r.thumbnail, href: r.href} })
        response.send(recipeData)
    })
})


const post = 8080
app.listen(post, function () {
    console.log(`server is up and running on post ${post}`)
})

