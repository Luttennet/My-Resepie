// class renderer {
//     constructor (){}
//     render (data){
//         $('#container').empty()
//         const source = $('#render-template').html()
//         const template = Handlebars.compile(source)
//         const newHTML = template({data})
//         $('#container').append(newHTML)
//         return (this.render)
//     }
// }

const Renderer = function(){

    const render = function(data){
        $('#container').empty()
        const source = $('#render-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({data})
        $('#container').append(newHTML)
    }
    return{render}
}