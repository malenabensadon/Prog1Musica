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


//url + proxy de albumes
let proxyCancion = 'https://cors-anywhere.herokuapp.com/';
let CancionesPage = 'https://api.deezer.com/chart/0/tracks';
let urlCanciones = proxyCancion+CancionesPage;

fetch(urlCanciones)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let CancionesPageContainer= document.querySelector('.listas');
    let CancionesPage= '';

    for(let i=0; i<info.length; i++){

        CancionesPage +=   ` <article class="caja"> 
                            <a href="./detail-track.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"alt=""></a> 
                            <a href="./detail-track.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a>
                            <a href="./detail-artist.html?id=${info[i].artist.id}"class="names">by ${info[i].artist.name} </a>
                            <a href="./playlists.html"><img class="favx"src="./img/fav.jpg" alt=""></a>
                            </article>`
       
    }
    CancionesPageContainer.innerHTML += CancionesPage
})   
.catch( function(error){
    console.log(error);
})