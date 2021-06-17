let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let artistDet = `https://api.deezer.com/artist/${id}`;
let url = proxy + artistDet;

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let artista = document.querySelector('.instagramj'); 
        artista.innerText += data.name;

        let fotito = document.querySelector(".fotoj");
        fotito.src = data.picture_medium;

 
    })

    .catch(function(error){
        console.log(error);
    })
