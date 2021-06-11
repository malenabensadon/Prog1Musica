let topTracks = 'https://api.deezer.com/chart/0/tracks'
let url = proxy+topTracks

fetch(url)
    .then(function(response){
        return response.json()

    })
    .then(function(data){
        let info = data.data
        console.log(info);
        let trackContainer= document.querySelector('.track');
        let contenidoTrack= '';

        for(let i=0; i<info.kength; i++){
            contenidoTrack += '<li class = "caja"> 
                                        <a href="./detail-track.html?id=${info
                                        [i].id }"><img class="fotos" src="$
                                        {info[i].album.cover_medium}"
                                        alt=""></a>
                                        <a href="./detail-track.html"
                                        class="names">${info[i].title}</a> <a
                                        href=".playlists.html"></a>
                                        <a href="./detail-artist.html"class="names">by Justin Bieber</a>
                                        <a href="./playlists.html"><img class="favx"src="./img/fav.jpg"alt=""></a>
                                </li>
        }
        trackContainer.innerHTML += contenidoTrack                        
                    
// capturas el form
//event listener para submit //.length
// prevent default y empezas a preguntar > un if si lo que vino en el campo busqueda es igual a ''
//campo 

//creamos variable

//capturamos el elemento y recibimos string
//let bucar = document.querySelector();
let buscar = document.querySelector('form')
let campoBuscar = document.querySelector('[name="search"]')

//creamos un evento
buscar.addEventListener('submit', function(event){
    event.preventDefault();
    //condicinales
    if(campoBuscar.value == ""){
        //hago un alert
        alert('El buscador esta vacio');
    }else{
        this.submit()
    }
    
})

//limpiar el mensaje de error cuando el usuario modifique el contenido del campo input. 
campoBuscar.addEventListener('input', function(){
    alert.innerText = "";
})



