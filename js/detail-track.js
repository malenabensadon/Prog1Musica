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

// window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador 

    let queryString = location.search //Caputramos qs
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let id = queryStringToObject.get('id');
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
    
    //buscamos info de la api
    fetch( url )
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
    
           
     
        })
    
        .catch(function(error){
            console.log(error);
        })
    

        // //Agregar a playlist.
        let playlist = [];

        //Recuperar datos del storage
        let recuperoStorage = localStorage.getItem('playlist');

        //Chequear y agregar la información de local storage en el array
        if(recuperoStorage != null){ //distinto de null entonces agrego a playlist
            playlist = JSON.parse(recuperoStorage);// si me devolvio algo o parseo y meto en playlist
        }

        //Chequear que el id esté en el array para cambiar el texto al usuario.
        if(playlist.includes(id)){
        document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
        }


        //Cuando el usuario haga click en "agregar a playlist" Agregar id de track dentro del array.
        let namesagregar = document.querySelector('.namesagregar');
        console.log(namesagregar);

        namesagregar.addEventListener("click", function(e){
            e.preventDefault();

            //Chequear si el id está en el array
            if(playlist.includes(id)){
                let idASacar = playlist.indexOf(id);
                playlist.splice(idASacar, 1);
                document.querySelector('.namesagregar').innerText = "Agregar a mi playlist";
            } else {
                //Guardamos el id en el array
                playlist.push(id);
                console.log(playlist);
                document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
            }


        //Armamos un string
        let namesagregarParaStorage = JSON.stringify(playlist);
        //Lo guardamos dentro de localStorage
        localStorage.setItem('playlist', namesagregarParaStorage);
        console.log(localStorage);

    })