window.addEventListener('load', function() {
    
    //creo variables con urls 
 let proxyDAlbum = 'https://cors-anywhere.herokuapp.com/';
 let Dalbum = `https://api.deezer.com/chart/album/${id}`;
 let url = proxyDAlbum + Dalbum;
     
     //creo un fetch que busca info de la api
 fetch(url)
     .then(function (response){
         return response.json();
     })
     .then (function(data){
         console.log(data);
         //nos quedamos solo el el array de datos
         let image = document.querySelector('.img');
         let title = document.querySelector('.title')
         let artist = document.querySelector('.artist');

        image.src = data.cover_medium;
        title.innetText = data.title;
        artist.innerText = data.artist.name;
  
     })

     .catch(function(error){
         console.log (error);
     })
 })
  
 
