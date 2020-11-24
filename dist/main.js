const renderer = new Renderer
const apiManager = new APImanager

const getRecipesBtn = $('#getRecipeBtn')
const inputIngredient = $('#inputIngredient')
const recipeContainer = $('#recipeContainer')

getRecipesBtn.on('click', function () {
    const ingredient = inputIngredient.val()
    inputIngredient.val('')
    apiManager.getRecipes(ingredient).then(function (recipes) {
        renderer.render(recipes)
    })
})


recipeContainer.on('click', '.mealImg', function () {
    const id = $(this).closest('.recipe').data('id')
    const recipe = apiManager.getRecipeById(id)
    console.log(recipe.ingredients[0]);
})



