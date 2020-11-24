class APImanager {
    constructor() {
        this.data = []
    }

    getRecipes(ingredient) {
        return $.ajax({
            method: 'GET',
            url: `/recipes/${ingredient}`,
            success: res => {
                console.log("data loaded");
                this.data = res
            }
        })
    }
    getRecipeById(id) {
        const recipe = this.data.find(r => r.id == id)
        return recipe
    }
}