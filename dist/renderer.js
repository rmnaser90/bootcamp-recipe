class Renderer {
  
    render(data) {
        const source = $('#players-template').html()
        const template = Handlebars.compile(source)
        $('#playersContainer').empty()
        const html = template({ data })
        $('#playersContainer').append(html)
    }
}