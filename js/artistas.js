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
//url + proxy de albumes
let proxyArtistas = 'https://cors-anywhere.herokuapp.com/';
let ArtistasPage = 'https://api.deezer.com/chart/0/artists';
let urlArtistas = proxyArtistas+ArtistasPage;

fetch(urlArtistas)
        .then(function(response){
            return response.json()
            })

        .then(function(data){
            let info = data.data
            console.log(info);
            let ArtistasPageContainer= document.querySelector('.listas');
            let ArtistasPage= '';

    for(let i=0; i<info.length; i++){

        ArtistasPage +=   ` <article class="caja"> 
                            <a href="./detail-artist.html?id=${info[i].id}" class="names">${info[i].name}</a>
                            <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}" alt=""></a>
                            </article>`
       
    }
    ArtistasPageContainer.innerHTML += ArtistasPage
})   
.catch( function(error){
    console.log(error);
})
})