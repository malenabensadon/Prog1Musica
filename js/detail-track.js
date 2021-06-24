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
    
    
    /////detail trackkkk
    
        let queryString = location.search //Caputro del url toda la qs
        let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL por new url..
        let id = queryStringToObject.get('id');//obtengo el id y lo pongo en url
        
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
        
        //buscamos info de la api, proceso en fetch
        fetch( url )
            .then( function(response){
                return response.json();//convertimos la info en formato json
            })
            .then(function(data){
                console.log(data);
                //devuelve info de 1 track en innerText/HTML
                //usamos innerText e innerHTML para cambiar lo que esta dentro de las etiquetas del html
                let cancion = document.querySelector('.track'); 
                //creamos ruta hacia nombre track
                cancion.innerText += data.title;
            
                let img = document.querySelector(".fotoaa");
                //creamos ruta hacia foto
                img.src += data.album.cover_medium;
                    
                let artista = document.querySelector(".names");
                //creamos ruta hacia nombre artista
                artista.innerHTML +=  `<a href="./detail-artist.html?id=${data.artist.id}"> ${data.artist.name} </a>`; 
                
                let album = document.querySelector(".instajustin");
                //creamos ruta hacia album
                album.innerHTML +=  `<a href="./detail-album.html?id=${data.album.id}"> ${data.album.title} </a>`; 
    
                let player = document.querySelector(".player");
                //creamos ruta hacia player
                player.innerHTML+=`<iframe class="player" title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="90%" margin="40px" height="300"frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
    
            })
        
            .catch(function(error){
                console.log(error);
            })
    
        // //Agregar a playlist. creo array donde va a ir la playlist
        let playlist = [];
    
        //Recuperar datos del storage cn propiedad playlist
        let recuperoStorage = localStorage.getItem('playlist');
    
        //Chequear y agregar la información de local storage en el array
        if(recuperoStorage != null){ //distinto de null entonces 
            playlist = JSON.parse(recuperoStorage);// me devolvio algo q lo parseo y meto en playlist
        }
    
        //Chequear que el id esté en el array para cambiar el texto al usuario.
        if(playlist.includes(id)){ //uso method de arry nuevo
        document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
        }
    
    
        //Cuando el usuario haga click en "agregar a playlist" quiero q el id de track se guarde en mi array
        let namesagregar = document.querySelector('.namesagregar');
        console.log(namesagregar);
    
        namesagregar.addEventListener("click", function(e){ //click comportamiento default
             e.preventDefault();// parametro e para detener el default
    
            //Chequear si el id está en el array
            if(playlist.includes(id)){//si si
                let idASacar = playlist.indexOf(id);//pido posicion
                playlist.splice(idASacar, 1);//desde posic saco 1
                document.querySelector('.namesagregar').innerText = "Agregar a mi playlist";
            } else {// el if da falso osea q no esta guardado
                //Guardamos el id en el array
                playlist.push(id);
                console.log(playlist);
                document.querySelector('.namesagregar').innerText = "Eliminar de mi playlist";
            }
    
        //Stringifeamos array de playlist
        let namesagregarParaStorage = JSON.stringify(playlist);
        //Lo guardamos dentro de localStorage
        localStorage.setItem('playlist', namesagregarParaStorage);
        console.log(localStorage);
    
        })
    })