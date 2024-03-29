window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador 
    
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

    let proxyDetGenero = 'https://cors-anywhere.herokuapp.com/';
    let GenerosDetPage = 'https://api.deezer.com/genre';
    let urlDetalleG = proxyDetGenero+GenerosDetPage;

    //buscamos info
    fetch(urlDetalleG)
    .then(function(response){
        //convertimos la info en formato json
        return response.json()

    })
    .then(function(data){
        let info = data.data;
        console.log(info);
        let generosPageContainer= document.querySelector('.listas');
        let contenidoGenerosPage= '';

        //recorremos el array de datos
        for(let i=0; i<info.length; i++){

            contenidoGenerosPage +=   ` <article class="caja"> 
                                        <li> 
                                        <a href="./detail-genres.html" class="names">${info[i].name}</a> 
                                        <a href="./detail-genres.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}" alt="FOTO GENERO LATINO"></a>
                                        </li>
                                        </article>`
                
        }

        //editamos nuestro html
        generosPageContainer.innerHTML += contenidoGenerosPage
    })  
    .catch( function(error){
        console.log(error);
    })

})

