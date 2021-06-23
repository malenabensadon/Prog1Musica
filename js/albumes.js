//Formulario

//Capturamos el formulario
let formulario = document.querySelector('form');
let buscador = document.querySelector('[name="search"]'); //capturamos el campo que queremos chequear

//creamos la variable del campo
let aviso = document.querySelector('.aviso')

//creamos un evento con evenListener
formulario.addEventListener('submit', function(e){
    e.preventDefault();//prevenimos el comportamiento default

    //condicionales chequeamos el contenido
    if( buscador.value == ""){
        //le aviso al usuario con alert
        aviso.innerText = 'El buscador no puede estar vacío';
    } else if( buscador.value.length < 3){
        //otro alert que avise que necesita mas caracteres
        aviso.innerText = 'Por favor ingrese más de tres caracteres';
    } else {
        this.submit();//enviamos el formulario
    }

})
//limpiamos el mensaje de error cuando el usuario modifica el contenido
buscador.addEventListener('input', function(){
    aviso.innerText= '';

})

window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador 
//url + proxy de albumes
let proxyAlbumes = 'https://cors-anywhere.herokuapp.com/'
let AlbumesPage = 'https://api.deezer.com/chart/0/albums'
let urlAlbumes = proxyAlbumes+AlbumesPage

fetch(urlAlbumes)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let albumesPageContainer= document.querySelector('.listas');
    let contenidoAlbumesPage= '';

    for(let i=0; i<info.length; i++){

        contenidoAlbumesPage +=   `<article class="album">
                                        <a href="./detail-album.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}" alt=""></a>
                                        <h3 class="texto"><a href="./detail-album.html?id=${info[i].id}" class="names">${info[i].title}</a></h3>
                                        <h4><a href="./detail-artist.html" class="names"> ${info[i].artist.name}</a></h4> 
                                  </article>`
    }
    albumesPageContainer.innerHTML += contenidoAlbumesPage
})   
.catch( function(error){
    console.log(error);
})
})