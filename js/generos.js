//url + proxy de generos
let proxyAlbumes = 'https://cors-anywhere.herokuapp.com/'
let GenerosPage = 'https://api.deezer.com/genre/'
let urlGeneros = proxyGeneros+GenerosPage

fetch(urlGeneros)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let generosPageContainer= document.querySelector('.listas');
    let contenidoGenerosPage= '';

    for(let i=0; i<info.length; i++){

        contenidoGenerosPage +=  `<article class="genero">
                                <a href="./detail-genres.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}" alt=""></a>
                                <h2 class="texto"><a href="./detail-genres.html" class="names">${info[i].title}</a></h2>
                                </article>`
               
    }
    generosPageContainer.innerHTML += contenidoGenerosPage
})   
.catch( function(error){
    console.log(error);
})
