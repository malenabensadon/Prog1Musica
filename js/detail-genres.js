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

      
        let urlGeneros1 = `https://api.deezer.com/genre/${id}/artists`;
        let urlGeneros2 = proxy + urlGeneros1;

        fetch(urlGeneros2)
        .then(function(response){
            return response.json()

            })
            .then(function(data){
                let info = data.data;
                console.log(info);
                let generosPageContainer= document.querySelector('.listas');
                let contenidoGenerosPage= '';

                for(let i=0; i<info.length; i++){

                    contenidoGenerosPage +=  `<article class="caja2"> 
                                                <li class="pequena"> 
                                                <a href="./detail-artist.html?id=${info[i].id}" class="names">${info[i].name}</a> 
                                                <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}"></img></a> 
                                                </li>
                                              </article>`
                                                
                        
                }

                generosPageContainer.innerHTML += contenidoGenerosPage
            
                })
        

    .catch(function(error){
        console.log(error);
    })  })
