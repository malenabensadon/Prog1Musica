window.addEventListener('load', function() {
 
    
    let queryString = location.search;
    let queryStringToObject = new URLSearchParams(queryString);
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
  

 
