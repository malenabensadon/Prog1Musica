window.addEventListener('load', function() {
    
   //creo variables con urls 
let proxyAlbumes = 'https://cors-anywhere.herokuapp.com/';
let AlbumesPage = 'https://api.deezer.com/album/${id}/tracks';
let urlDetalleAlbum = proxyAlbumes+AlbumesPage;
    
    //creo un fetch que busca info de la api
fetch(url)
    .then(function (response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        let albumCompleto = data;
        let albumDetalle = document.querySelector('.detallealbum');
        let albumesTracks ='';

//recorremos el array de canciones del album
    for(i=0; i<albumesTracks.length; i++){
        albumesTracks += 
         `<h1> ${albumCompleto[i].title}</h1>
            <img src=" ${albumCompleto[i].md5_image}" alt="" class="fotoj"> 
            <p> ${albumCompleto[i].preview}</p>`
            
    }
    albumDetalle.innerHTML += albumesTracks

    })
    .catch(function(error){
        console.log (error);
    })
})
