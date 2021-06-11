//ejemplo con un solo dato.
let urlAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";


fetch(urlAlbum)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let album = data.results;
     //destinos
        let texto = document.querySelector('.texto');
        let fotos = document.querySelector('.fotos');
        let listadetallealbum = document.querySelector('.listadetallealbum');
        

        texto.innerHTML += album.pag;
        listadetallealbum.innerHTML += `${album.listas.last}. ${album.listas.first}. ${album.listas.last}`;
        fotos.src = album.picture.medium;
    })
    .catch( function(error){

        console.log = error
    })
