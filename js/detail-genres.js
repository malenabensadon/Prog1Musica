let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let detalleGeneros = `https://api.deezer.com/genre/${id}`;
let urlDetGenero = proxy + detalleGeneros;


fetch( urlDetGenero )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let genero = document.querySelector('.pag'); 
        genero.innerText += data.name;
    
        let foto = document.querySelector(".fotoaa");
        foto.src = data.picture_medium;
 
    })

    .catch(function(error){
        console.log(error);
    })
