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


    //PLAYLISTTT

    //Recupero el storage. tengo un string
    let recuperoStorage = localStorage.getItem('playlist');
    //Lo transformo en array con parse
    let playlist = JSON.parse(recuperoStorage);
    //destino de los datos en el html
    let playlist1 = document.querySelector('.containerpl');


    //Necesitamos recorrer el array de playlist
    for (let i=0; i<playlist.length; i++){
        //buscarYMostrarPlaylist
    buscarYMostrarPlaylist(playlist[i]);
    }


    function buscarYMostrarPlaylist(id){
        let proxy3 = 'https://cors-anywhere.herokuapp.com/'
        let url = `https://api.deezer.com/track/${id}`
        let playlist3= proxy3+url
        
        //buscamos info de la api
        fetch(playlist3)
        .then( function(response){
            return response.json();//convertimos la info en formato json
        })
        .then(function(data){
            //procesar
            // let info = data.data;
            console.log(data)
            // let resultados = '';
            playlist1.innerHTML += `<article class="cajapl">
                                <article class="fotopl">
                                    <a href="./detail-track.html?id=${data.id}"><img class="fotop" src="${data.album.cover_medium}" alt=""></a>
                                    <h2> <a href="./detail-track.html?id=${data.id}">${data.title}</a></h2>
                                    <h4> <a href="./detail-artist.html?id=${data.artist.id}"> ${data.artist.name} </a></h4>
                                    <h5> <a class="namesagregar" href="./detail-track.html?id=${data.id}"> Eliminar de mí playlist </a> </h5>
                                    </article>
                                <article class="infopl">
                                    <iframe class="player" title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="190" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                                    </article>` 
        
        })
        .catch( function(e){
            console.log(e);
        })
    }
    //SUGERENCIAS
    //url + proxy 
    let proxyCancion = 'https://cors-anywhere.herokuapp.com/';
    let CancionesPage = 'https://api.deezer.com/chart/0/tracks';
    let urlCanciones = proxyCancion+CancionesPage;

    //buscamos info de la api con un fetch
    fetch(urlCanciones)
    .then(function(response){
        return response.json()//convertimos la info en formato json

    })
    .then(function(data){
        let info = data.data
        console.log(info);
        let CancionesPageContainer= document.querySelector('.listas');
        let CancionesPage= '';

    //for que recorra la info
        for(let i=0; i<info.length; i++){

            CancionesPage +=   `<article class="caja"> 
                                <a href="./detail-track.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"alt=""></a> 
                                <h6> <a href="./detail-track.html?id=${info[i].id }"><img src= "./img/fav.jpg"> </img></a></h6>
                                <a href="./detail-track.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a>
                                </article>`
        }
    //usamos innerHTML para editar nuestro html desde js
        CancionesPageContainer.innerHTML += CancionesPage
    })   
    .catch( function(error){
        console.log(error);
    })

                //desde acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

                //Cuando el usuario haga click en "vaciar playlist" 
                let chau = document.querySelector('.vaciar');
                console.log(chau);

                chau.addEventListener("click", function(e){
                    e.preventDefault();
                    localStorage.clear();
                    document.querySelector('.vaciar').style.display="none"
                    document.querySelector('.agregar').style.display="inline"
                    document.querySelector('.upsi').style.display="inline"
                    document.querySelector('.containerpl').innerHTML= '';
                })


//<h2 style="display:none" class="agregar" >Oops! Tu playlist se encuentra vacía!</h2>
})


 