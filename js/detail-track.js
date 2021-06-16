let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let cancion = document.querySelector('.track'); 
        cancion.innerText += data.title;
    
        let img = document.querySelector(".fotoaa");
        img.src += data.artist.picture_medium;
            
        let artista = document.querySelector(".names");
        artista.innerText += data.artist.name;
        
        let album = document.querySelector(".instajustin");
        album.innerText += data.album.title;

        let player = document.querySelector(".videoj");
        player.src += data.preview;
 
    })

    .catch(function(error){
        console.log(error);
    })


// //Agregar a playlist.
// let playlist = [];

// //Recuperar datos del storage
// let recuperoStorage = localStorage.getItem('playlist');

// //Chequear y agregar la información de local storage en el array
// if(recuperoStorage != null){
//     agregar = JSON.parse(recuperoStorage);
// }

// //Chequear que el id esté en el array para cambiar el texto al usuario.
// if(playlist.includes(id)){
//     document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
// }

// //Cuando el usuario haga click en "agregar a playlist" Agregar id de track dentro del array.
// let agregar = document.querySelector('.agregar');
// console.log(agregar);

// fav.addEventListener("click", function(e){
//     e.preventDefault();

//     //Chequear si el id está en el array
//     if(playlist.includes(id)){
//         let idASacar = agregar.indexOf(id);
//         playlist.splice(idASacar, 1);
//         document.querySelector('.agregar').innerText = "Agregar a mi playlist";
//     } else {
//         //Guardamos el id en el array
//         agregar.push(id);
//         console.log(playlist);
//         document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
//     }
        
//     //Armamos un string
//     let agregarParaStorage = JSON.stringify(playlist);
//     //Lo guardamos dentro de localStorage
//     localStorage.setItem('playlist', agregarParaStorage);
//     console.log(localStorage);
    
   
    

//     })