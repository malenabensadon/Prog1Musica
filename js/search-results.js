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


let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

console.log(queryString); 
console.log(queryStringObj); 

let buscar = queryStringObj.get('search'); 
console.log(buscar); 

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/search/track?q=' + buscar; 

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadosTracks');
        let resultados = datos.data; 

        resultados.forEach(function(resultado) {
            lista.innerHTML += '<li style="padding: 10px;"><a href="trackDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.album.cover_medium + '" alt="' + resultado.title + '<br>' + resultado.name + '"><p>' + resultado.title + '<br>' + resultado.artist.name + '</p></div></a></li>'
            
        });
        console.log(datos)
    })
.catch(function(error){
    return console.log(error);
  })
 

urlArtista= proxy + 'https://api.deezer.com/search/artist?q=' + buscar; 

fetch(urlArtista)
    .then(function(response){
        return response.json(); 
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadosArtist');
        let resultados = datos.data; 

        resultados.forEach(function(resultado) {
            lista.innerHTML += '<li style="padding: 10px;"><a href="artistsDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.picture_big + '" alt="' + resultado.name + '"class="fotoArtistasBusqueda"><p>' + resultado.name + '</p></div></a></li>'
        });
        console.log(datos)
    })
.catch(function(error){
    return console.log(error);
  })
 


urlAlbum = proxy + 'https://api.deezer.com/search/album?q=' + buscar; 

  fetch(urlAlbum)
      .then(function(response){
          return response.json(); 
      })
      .then(function(datos){
          console.log(datos);
          let lista = document.querySelector('.resultadosAlbums');
          let resultados = datos.data; 
  
          resultados.forEach(function(resultado) {
              lista.innerHTML += '<li style="padding: 10px;"><a href="albumDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.cover_medium + '" alt="' + resultado.title + '"class="fotoArtistasBusqueda"><p>' + resultado.title + '</p></div></a></li>'
          });
          console.log(datos)
      })
  .catch(function(error){
      return console.log(error);
    })



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
