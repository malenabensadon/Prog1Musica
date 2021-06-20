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

//creamos variables con urls
let proxy = 'https://cors-anywhere.herokuapp.com/'
let topTracks = 'https://api.deezer.com/chart/0/tracks'
let url = proxy+topTracks

//buscamos info de la api
fetch(url)
    .then(function(response){
        return response.json()//convertimos la info en formato json

    })
    .then(function(data){
        let info = data.data
        console.log(info);
        let trackContainer= document.querySelector('.listas');
        let contenidoTrack= '';

        //recorremos la info
        for(let i=0; i<info.length; i++){
            contenidoTrack += `<li class="caja"> 
                                        <a href="./detail-track.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"
                                        alt=""></a> <a href="./detail-track.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a><a href="./detail-artist.html?id=${info[i].artist.id}"class="names">${info[i].artist.name}</a>
                                        <a href="./playlists.html"><img class="favx"src="./img/fav.jpg"alt=""></a>
                                </li>`
        }
        //editamos nuestro html
        trackContainer.innerHTML += contenidoTrack
    })

//url + proxy
let proxy2 = 'https://cors-anywhere.herokuapp.com/'
let topAlbums = 'https://api.deezer.com/chart/0/albums'
let url2 = proxy2+topAlbums

//buscamos info de la api
fetch(url2)
.then(function(response){
    return response.json()//convertimos la info en formato json

})
.then(function(data){
    let info = data.data
    console.log(info);
    let albumContainer= document.querySelector('.albumes');
    let contenidoAlbum= '';

    //recorremos el array de datos
    for(let i=0; i<info.length; i++){

        contenidoAlbum += `<li class="caja">
                             <a href="./detail-album.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}"></a>
                             <a href="./detail-album.html?id=${info[i].id}" class="names">${info[i].title}</a>
                             <a href="./detail-artist.html?id=${info[i].artist.id}"class="names">by ${info[i].artist.name}</a>
                           </li>`
    }
    //editamos nuestro html
    albumContainer.innerHTML += contenidoAlbum
})   

//url + proxy
let proxy3 = 'https://cors-anywhere.herokuapp.com/'
let topArtists = 'https://api.deezer.com/chart/0/artists'
let url3 = proxy3+topArtists

//buscamos info de la api
fetch(url3)
.then(function(response){
    return response.json()//convertimos la info en formato json

})
.then(function(data){
    let info = data.data
    console.log(info);
    let artistsContainer= document.querySelector('.artistas');
    let contenidoArtists= '';

    //recorremos el array de datos
    for(let i=0; i<info.length; i++){

        contenidoArtists += `<li class="caja">
                                 <a href="./detail-artist.html?id=${info[i].id}" class="names">${info[i].name}</a>
                                 <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}" alt=""></a>
                            </li>`
    }
    //editamos el html
    artistsContainer.innerHTML += contenidoArtists
})   
})