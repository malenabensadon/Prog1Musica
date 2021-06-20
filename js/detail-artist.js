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
        artista.innerText = data.name;

        let fotito = document.querySelector(".fotoj");
        fotito.src = data.picture_medium;

        let urlGenerosTop = `https://api.deezer.com/artist/${id}/albums`;
        let urlGenerosTop2 = proxy + urlGenerosTop;

        fetch(urlGenerosTop2)
        .then(function(response){
            return response.json()

            })
            .then(function(data){
                let info = data.data;
                console.log(info);
                let generosPageContainer= document.querySelector('.topalbumss');
                let contenidoGenerosPage= '';

                for(let i=0; i<5; i++){

                    contenidoGenerosPage +=   `<li>${info[i].title} </li>`
                        
                }

                generosPageContainer.innerHTML += contenidoGenerosPage
            
                })

 
    })

    .catch(function(error){
        console.log(error);
    })
})