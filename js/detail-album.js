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
 
    
    let queryString = location.search //Caputramos queryString
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en Objeto Literal
    let id = queryStringToObject.get('id'); //obtener la informacion de la posicion id

    //creo variables con urls 
 let proxyDAlbum = 'https://cors-anywhere.herokuapp.com/';
 let dAlbum = `https://api.deezer.com/album/${id}`; 
 let urlDAlbum = proxyDAlbum+dAlbum;
     
     //creo un fetch que busca info de la api
 fetch(urlDAlbum)
     .then(function (response){
         return response.json();
     })
     .then (function(data){
         console.log(data);

          //nos quedamos solo el el array de datos
          let image = document.querySelector('.fotoj');
          //creamos ruta hacia la foto del album
          image.src = data.cover_big;
 
          let title = document.querySelector('.title');
          //creamos ruta hacia el nombre del disco
          title.innerText = data.title;
 
          let artist = document.querySelector('.artist');
          //creamos ruta hacia el nombre del artista
          artist.innerHTML = `<a href="./detail-artist.html?id=${data.artist.id}"> ${data.artist.name} </a>`;

         let genero = document.querySelector('.genre');
         //creamos ruta hacia el nombre del genero
         genero.innerText = data.genres.data[0].name;

         publicacion = document.querySelector('.date');
         //fecha de publicacion 
         publicacion.innerText = data.release_date;
         
        //recorremos el array de tracks

        //canciones de tracks 
        let urlAlbumT = `https://api.deezer.com/album/${id}/tracks`;
        let urlAlbumTrack = proxyDAlbum + urlAlbumT;

        //buscamos la info de la api
        fetch(urlAlbumTrack)
        .then(function(response){
            return response.json()//convertimos la info en formato json

            })
            .then(function(data){
                let info = data.data;
                console.log(info);
                let albumDetContainer= document.querySelector('.tracks'); //dentro de esta section queremos traer los datos
                let contenidoAlbumDet= '';
                albumDetContainer.style.fontSize = "20px";

//recorremos la info con un for
                for(let i=0; i<info.length; i++){

                    contenidoAlbumDet +=   `<li><a href="./detail-track.html?id=${info[i].id}" > ${info[i].title}</a> </li>`
                        
                }
//editamos el Html
                albumDetContainer.innerHTML += contenidoAlbumDet
            
                })

       .catch(function(error){
        console.log(error);
    })
})
})