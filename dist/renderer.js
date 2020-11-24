class Renderer {
  
    render(data) {
        const source = $('#recipe-template').html()
        const template = Handlebars.compile(source)
        $('#recipeContainer').empty()
        const html = template({ data })
        $('#recipeContainer').append(html)
    }
}