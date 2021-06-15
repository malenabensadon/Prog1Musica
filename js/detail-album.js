window.addEventListener('load', function() {
 
    
    let queryString = location.search;
    let queyStringToObject = new URLSearchParams(queryString);
    let id = queryStringToObject.get('id');

    //creo variables con urls 
 let proxyDAlbum = 'https://cors-anywhere.herokuapp.com/';
 let Dalbum = 'https://api.deezer.com/album/302127';
 let urlDAlbum = proxyDAlbum + Dalbum;
     
     //creo un fetch que busca info de la api
 fetch(urlDAlbum)
     .then(function (response){
         return response.json();
     })
     .then (function(data){
         console.log(data);
         //nos quedamos solo el el array de datos
         let image = document.querySelector('.fotoj');
         let title = document.querySelector('.title');
         let artist = document.querySelector('.artist');

        image.src = data.cover_medium;
        title.innetText = data.title;
        artist.innerText = data.artist.name;
  
     })
     .catch( function(error){
         console.log (error);
     })
 })
  
 
