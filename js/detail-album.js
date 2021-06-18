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
          image.src = data.cover_medium;
 
          let title = document.querySelector('.title');
          //creamos ruta hacia el nombre del disco
          title.innerText = data.title;
 
          let artist = document.querySelector('.artist');
          //creamos ruta hacia el nombre del artista
          artist.innerText = data.artist.name;

         let genero = document.querySelector('.genre');
         //creamos ruta hacia el nombre del genero
         genero.innerText = data.genres.data[0].name;

         publicacion = document.querySelector('.date');
         //fecha de publicacion 
         publicacion.innerText = data.release_date;
         
        //recorremos el array de tracks

        //canciones de tracks 
        let info = data.data
        console.log(info);
        let albumestracks = document.querySelector('.tracks');
        let contenidoAlbum = '';

        for(let i=0; i<info.length; i++){

            contenidoAlbum +=   `<li class="cancion">${info[i].data.tracks.data}</li>`
    }
    albumestracks.innerHTML += contenidoAlbum;
})   
       .catch(function(error){
        console.log(error);
    })
})