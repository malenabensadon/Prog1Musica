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

//PLAYLISTTT

//Recupero el storage.
let recuperoStorage = localStorage.getItem('playlist');
//Obtengo el array 
let playlist = JSON.parse(recuperoStorage);
//destino de los datos en el html
let playlist = document.querySelector('.containerpl');


//Opcional avisar al usuario que no hay gifs en su lista.

//Necesitamos recorrer el array de playlist
for (let i=0; i<playlist.length; i++){
    //buscarYMostrarPlaylist
   buscarYMostrarPlaylist(playlist[i]);
}


function buscarYMostrarPlaylist(id){
    let url = `https://api.deezer.com/tracks${id}`
    
    //buscamos info de la api
    fetch(url)
    .then( function(response){
        return response.json();//convertimos la info en formato json
    })
    .then(function(data){
        //procesar
        let info = data.data;
        let resultados = '';
        containerpl.innerHTML += `<article class="cajapl">
                            <article class="fotopl">
                                <a href="./detail-track.html"><img class="fotop" src="${info[i].data.picture_medium}" alt=""></a>
                            </article>
                            <article class="infopl">
                                <h2> <a href="./detail-track.html">${info[i].data.title}</a> <a href="./playlists.html"></a></h2>
                                <h4><a href="./detail-artist.html"> ${info[i].data.artist.name} </a></h4>
                        </article>` 
    
    })
    .catch( function(e){
        console.log(e);
    })
}
})
