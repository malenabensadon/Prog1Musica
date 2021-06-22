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

// window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador

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
                                        <a href="./detail-track.html?id=${info[i].id}"><p><a class="namesagregar" href="">Agregar a mí playlist</a></p></a>
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


//Agregar a playlist.
//  let playlist = [];

//  //Recuperar datos del storage
//  let recuperoStorage = localStorage.getItem('playlist');

//  //Chequear y agregar la información de local storage en el array
//  if(recuperoStorage != null){ //distinto de null entonces agrego a playlist
//      playlist = JSON.parse(recuperoStorage);// si me devolvio algo o parseo y meto en playlist
//  }

//  //Chequear que el id esté en el array para cambiar el texto al usuario.
//  if(playlist.includes(id)){
//  document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
//  }


//  //Cuando el usuario haga click en "agregar a playlist" Agregar id de track dentro del array.
//  let namesagregar = document.querySelector('.namesagregar');
//  console.log(namesagregar);

//  namesagregar.addEventListener("click", function(e){
//      e.preventDefault();

//      //Chequear si el id está en el array
//      if(playlist.includes(id)){
//          let idASacar = playlist.indexOf(id);
//          playlist.splice(idASacar, 1);
//          document.querySelector('.namesagregar').innerText = "Agregar a mi playlist";
//      } else {
//          //Guardamos el id en el array
//          playlist.push(id);
//          console.log(playlist);
//          document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
//      }


//  //Armamos un string
//  let namesagregarParaStorage = JSON.stringify(playlist);
//  //Lo guardamos dentro de localStorage
//  localStorage.setItem('playlist', namesagregarParaStorage);
//  console.log(localStorage);

// })