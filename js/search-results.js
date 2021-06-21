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

window.addEventListener("load", function(){ //controlar que todo el html esté cargado en el navegador 

    let queryString = location.search //Caputramos queryString
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en Objeto Literal
    //como es un objeto literal usamos el metodo get para obtener los datos
    let aBuscar  = queryStringToObject.get('search'); //obtener la informacion que esta dentro de nuestro form
    //ponemos el name del campo input del formulario porque sino no funciona. 

//creamos variables con urls
let proxy2 = 'https://cors-anywhere.herokuapp.com/'
let topTracks = `https://api.deezer.com/search/track?q=${aBuscar}`
let url2 = proxy2+topTracks

//buscamos info de la api
fetch(url2)
    .then(function(response){
        return response.json()//convertimos la info en formato json

    })
    .then(function(data){
        let info = data.data
        console.log(info);
        let trackContainer= document.querySelector('.detailx');
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

    //creo variables con url
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = `https://api.deezer.com/search/album?q=${aBuscar}`;//luego de ?q= ponemos la variable que armamos que contiene los datos dentro de nuesro buscador.
    let urlResultadoalbum = proxy+url
     
     //creo un fetch que busca info 
     fetch(urlResultadoalbum)
     .then(function(response){
         return response.json()//convertimos la info en formato json
 
     })
     .then(function(data){
         let info = data.data
         console.log(info);
         let section = document.querySelector('.detailx');
         let resultados= '';
 
         //recorremos la info
         for(let i=0; i<info.length; i++){
             resultados += `<li class="caja">
             <a href="./detail-album.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}"></a>
             <a href="./detail-album.html?id=${info[i].id}" class="names">${info[i].title}</a>
             <a href="./detail-artist.html?id=${info[i].artist.id}"class="names">by ${info[i].artist.name}</a>
           </li>`//los corchetes i son para estar adentro del array
         }

         //editamos nuestro html con los resultados
         section.innerHTML += resultados
     })
 
//FALTA IF NO HAY NADA PARA LA BUSQUEDA OOPS


//Capturamos el formulario
let busqueda = document.querySelector('form');
let buscador = document.querySelector('[name="search"]'); //capturamos el campo que queremos chequear

//creamos la variable del campo
let errordebusqueda = document.querySelector('.oops')

//creamos un evento con evenListener
busqueda.addEventListener('submit', function(e){
    e.preventDefault();//prevenimos el comportamiento default

    //condicionales chequeamos el contenido
    if( buscador.value !== ""){
        //le aviso al usuario 
        errordebusqueda.innerHTML = `<h2 class= "titulos">Oops! No se encontaron resultados para tu búsqueda</h2>
                            <h2 class="titulos">Búsqueda relacionada:</h2>`;
    } else {
        this.submit();//enviamos el formulario
    }

})

//limpiamos el mensaje de error cuando el usuario modifica el contenido
buscador.addEventListener('input', function(){
    aviso.innerText= '';

})

// FALTAN ARTSITAS
//FALTAN GENEROS

// FALTAN RELACIONADAS


 


  //  let loader = document.querySelector(".gif");
   // loader.style.display = "none"; //esconderlo, si no estoy escribiendo una variable
    
    //let queryString = location.search //Caputramso qs
    /* let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let aBuscar = queryStringToObject.get('.......................'); //Acá va el name del campo input del formulario.

    let datoBuscado = document.querySelector('.datoBuscado'); 
    datoBuscado.innerText = `Resultados para ${formulario}`;

let url = `unlink con ${aBuscar}`;

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //Aca muestro código
        console.log(data);
        let info = data.data;
        let section = document.querySelector('.lista');
        let resultados = '';

        for(let i=0; i<info.length; i++){
            resultados+= `<article>
                            <h2>${info[i].title}</h2>
                            <img src="${info[i].images.original.url}">
                        </article>`
        }
        section.innerHTML += resultados
        

    })
    .catch( function(error){
        console.log(error);
    })
*/
})
