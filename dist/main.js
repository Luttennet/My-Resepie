const renderer = Renderer()

$('#search').on('click', function () {
    let ingredient = $('#search-input').val()
    $.get(`recipes/${ingredient}`, function (recipes) {
        renderer.render(recipes)
    })
})

$('#container').on('click', '.img', function(){
    const firstItem = $(this).closest("div").find(".list").text()
    alert(firstItem)
})