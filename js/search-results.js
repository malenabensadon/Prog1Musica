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
 
// resultados de busqueda
 
    let queryString = location.search //Caputramos queryString
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en Objeto Literal
    //como es un objeto literal usamos el metodo get para obtener los datos
    let aBuscar  = queryStringToObject.get('search'); //obtener la informacion que esta dentro de nuestro form
    //ponemos el name del campo input del formulario porque sino no funciona. 

    let infobuscada = document.querySelector('.resultado7')
    infobuscada.innerText = `"Resultados de busqueda para ${aBuscar}"`;
    //limpiamos el mensaje cuando el usuario modifica el contenido
        buscador.addEventListener('input', function(){
            infobuscada.innerText= '';
 
            })

//TRACKS
//creamos variables con urls
let proxy2 = 'https://cors-anywhere.herokuapp.com/'
let topTracks = `https://api.deezer.com/search/track?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
let url2 = proxy2+topTracks
 
//buscamos info de la api
fetch(url2)
    .then(function(response){
        return response.json()//convertimos la info en formato json
 
    })
    .then(function(data){
        let info = data.data
 
                //FALTA IF NO HAY NADA PARA LA BUSQUEDA TRACKS
 
        //creamos la variable del campo
        let tracks = document.querySelector('.oops')
        let nada = '';
 
        //condicionales chequeamos el contenido
        if(info.length == 0){
            nada+= `<h2 class= "tito"> No se encontaron resultados para tu búsqueda</h2>
                            <h2 class="tito">Búsqueda relacionada:</h2>`;
        }
        tracks.innerHTML += nada

                //limpiamos el mensaje de error cuando el usuario modifica el contenido
        buscador.addEventListener('input', function(){
            tracks.innerText= '';

        })
 
        console.log(info);
        let trackContainer= document.querySelector('.resultadosTracks');
        let contenidoTrack= '';
 
        //recorremos la info
        for(let i=0; i<info.length; i++){
            contenidoTrack += `<li class="caja"> 
                                         <a href="./detail-track.html?id=${info[i].id }"><img class="fotos5" src="${info[i].album.cover_medium}"alt=""></a> 
                                        <a href="./detail-track.html?id=${info[i].id}"class="names5">${info[i].title}</a> 
                                        <a href="./detail-artist.html?id=${info[i].artist.id}"class="cosa5">${info[i].artist.name}</a>
                                        
                                </li>`
        }
        //editamos nuestro html
        trackContainer.innerHTML += contenidoTrack
    })
    
// ARTSITAS
 //creamos variables con urls
 let proxy3 = 'https://cors-anywhere.herokuapp.com/'
 let topArtists = `https://api.deezer.com/search/artist?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
 let url3 = proxy3+topArtists
 
 //buscamos info de la api
 fetch(url3)
 .then(function(response){
     return response.json()//convertimos la info en formato json
 
 })
 .then(function(data){
     let info = data.data
 
            //FALTA IF NO HAY NADA PARA LA BUSQUEDA ARTISTS
 
        //creamos la variable del campo
        let artists = document.querySelector('.oops')
        let nada = '';
 
        //condicionales chequeamos el contenido
        if(info.length == 0){
            nada+= `<h2 class= "tito"> No se encontaron resultados para tu búsqueda</h2>
                            <h2 class="tito">Búsqueda relacionada:</h2>`;
        }
        artists.innerHTML += nada

                //limpiamos el mensaje de error cuando el usuario modifica el contenido
        buscador.addEventListener('input', function(){
            artists.innerText= '';
 
        })
 
     console.log(info);
     let artistsContainer= document.querySelector('.resultadosArtist');
     let contenidoArtists= '';
 
     //recorremos el array de datos
     for(let i=0; i<info.length; i++){
 
         contenidoArtists += `<li class="caja">
                                <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos5" src="${info[i].picture_medium}" alt=""></a>
                                <a href="./detail-artist.html?id=${info[i].id}" class="cosa5">${info[i].name}</a>
                                </li>`


                             
     }
     //editamos el html
     artistsContainer.innerHTML += contenidoArtists
 })   
 

// ALBUMS
 //creamos variables con urls
 let proxy4 = 'https://cors-anywhere.herokuapp.com/'
 let topAlbums = `https://api.deezer.com/search/album?q=${aBuscar}`//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
 let url4 = proxy4+topAlbums
 
 //buscamos info de la api
 fetch(url4)
 .then(function(response){
     return response.json()//convertimos la info en formato json
 
 })
 .then(function(data){
     let info = data.data
 
            //FALTA IF NO HAY NADA PARA LA BUSQUEDA ALBUMS
 
        //creamos la variable del campo
        let albums = document.querySelector('.oops')
        let nada = '';
 
        //condicionales chequeamos el contenido
        if(info.length == 0){
            nada+= `<h2 class= "tito"> No se encontaron resultados para tu búsqueda</h2>
                            <h2 class="tito">Búsqueda relacionada:</h2>`;
        }
        albums.innerHTML += nada

                //limpiamos el mensaje de error cuando el usuario modifica el contenido
        buscador.addEventListener('input', function(){
            albums.innerText= '';
 
        })
 
     console.log(info);
     let albumsContainer= document.querySelector('.resultadosAlbums');
     let contenidoAlbums= '';
 
     //recorremos el array de datos
     for(let i=0; i<info.length; i++){
 
         contenidoAlbums += `<li class="caja">
                                <a href="./detail-album.html?id=${info[i].id}"><img class="fotos5" src="${info[i].cover_medium}"></a>                 
                                <a href="./detail-album.html?id=${info[i].id}" class="names5">${info[i].title}</a>
                                <a href="./detail-artist.html?id=${info[i].artist.id}"class="cosa5">by ${info[i].artist.name}</a>
                            </li>`
     }
     //editamos el html
     albumsContainer.innerHTML += contenidoAlbums
 }) 

 //editando el css desde java (detalles copados)
 
 //capturamos el elemento y lo metemos dentro de una variable
 let busquedaper = document.querySelector(".resultado7")
 
 //hacemos un evento en la variable ya asignada
 busquedaper.addEventListener('mouseover', function(e){
    e.preventDefault()
    //lo que sucede cuando pasa el mouse
    busquedaper.style.border= "solid 3px chartreuse"; 
 })
 busquedaper.addEventListener('mouseout', function(){
     //lo que sucede cuando retira el mouse
     busquedaper.style.border = "";
 })

 //OTRO EVENT 

  //capturamos el elemento y lo metemos dentro de una variable
  let elementolista = document.querySelector(".caja")
 
  //hacemos un evento en la variable ya asignada
  elementolista.addEventListener('mouseover', function(e){
     e.preventDefault()
     //lo que sucede cuando pasa el mouse
     elementolista.style.backgroundColor = "grey"; 
  })
  elementolista.addEventListener('mouseout', function(){
      //lo que sucede cuando retira el mouse
     elementolista.style.backgroungColor = "black";
  })

