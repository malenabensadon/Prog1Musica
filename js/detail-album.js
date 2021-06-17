window.addEventListener('load', function() {
 
    
    let queryString = location.search //Caputramos queryString
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en Objeto Literal
    let id = queryStringToObject.get('id');

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
         image.src = data.contributors.cover_medium;

         let title = document.querySelector('.title');
         //creamos ruta hacia el nombre del disco
         title.innetText = data.genres.data.title;

         let artist = document.querySelector('.artist') = 'Artista:';
         //creamos ruta hacia el nombre del artista
         artist.innerText = data.artist.name;

         let genero = document.querySelector('.genre')='Genero:'
         //creamos ruta hacia el nombre del genero
         genero.innerText = data.genres.data.name;

         let publicacion = document.querySelector('.date')= 'Publicacion:';
         //fecha de publicacion 
         publicacion.innerText = data.date 

         //creamos lista d tracks dentro el album
         let info = data.data
         let albumesContainer= document.querySelector('.tracks');
         let DetalleTracks= '';

         //creamos un for que recorra las canciones del album
             for(let i=0; i<10; i++){
                    DetalleTracks +=   `<li>${info[i].tracks} </li>`
                    }
                    
            albumesContainer.innerHTML += DetalleTracks
            })

  
     })
     .catch( function(error){
         console.log (error);
     })

  

 
