//Formulario

//Capturamos el formulario
let formulario = document.querySelector('form');
let buscador = document.querySelector('[name="search"]'); //capturamos el campo que queremos chequear

//creamos la variable del campo
let aviso = document.querySelector('.aviso')

//creamos un evento con evenListener
formulario.addEventListener('submit', function(e){
    e.preventDefault();//prevenimos el comportamiento default

    //condicionales chequeamos el contenido
    if( buscador.value == ""){
        //le aviso al usuario con alert
        aviso.innerText = 'El buscador no puede estar vacío';
    } else if( buscador.value.length < 3){
        //otro alert que avise que necesita mas caracteres
        aviso.innerText = 'Por favor ingrese más de tres caracteres';
    } else {
        this.submit();//enviamos el formulario
    }

})
//limpiamos el mensaje de error cuando el usuario modifica el contenido
buscador.addEventListener('input', function(){
    aviso.innerText= '';

})

window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador 

let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let url = `https://api.deezer.com/track/${id}`;
let proxy = 'https://cors-anywhere.herokuapp.com/';
let urltracks = url+proxy;


//buscamos info de la api
fetch( urltracks )
    .then( function(response){
        return response.json();//convertimos la info en formato json
    })
    .then(function(data){
        console.log(data);

        //usamos innerText para cambiar lo que esta dentro de las etiquetas del html
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
})

// // //Agregar a playlist.
// let playlist = [];

//  //Cuando el usuario haga click en "agregar a playlist" Agregar id de track dentro del array.
// let namesagregar = document.querySelector('.namesagregar');
// console.log(namesagregar);

// namesagregar.addEventListener("click", function(e){
//      e.preventDefault();
//     //hasta aca paramos el evento
//     //hacemos push para agregar lo nuestro id al array de playlist
//     //guardamos id en array
//       playlist.push(id);
//       console.log(playlist);

//       //armamos string
//       let playlistParaStorage = JSON.stringify(playlist);
      
//       //lo guarfamos dentro del local storage
//       //set.item permite guardar en storage
//       localStorage.setItem('playlist', playlistParaStorage);
//       console.log(localStorage);
// })
      




//  //Recuperar datos del storage
//  let recuperoStorage = localStorage.getItem('playlist');

// // //Chequear y agregar la información de local storage en el array
//  if(recuperoStorage != null){
//        agregar = JSON.parse(recuperoStorage);
//  }

// //Chequear que el id esté en el array para cambiar el texto al usuario.
//  if(playlist.includes(id)){
//     document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
// }

// \

// //     //Chequear si el id está en el array
// //     if(playlist.includes(id)){
// //         let idASacar = agregar.indexOf(id);
// //         playlist.splice(idASacar, 1);
// //         document.querySelector('.agregar').innerText = "Agregar a mi playlist";
// //     } else {
// //         //Guardamos el id en el array
// //         agregar.push(id);
// //         console.log(playlist);
// //         document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
// //     }
        
// //     //Armamos un string
// //     let agregarParaStorage = JSON.stringify(playlist);
// //     //Lo guardamos dentro de localStorage
// //     localStorage.setItem('playlist', agregarParaStorage);
// //     console.log(localStorage);
    
   
    

// //     })