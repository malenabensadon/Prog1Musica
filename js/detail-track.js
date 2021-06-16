let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        
        let cancion = document.querySelector('.track'); 
        cancion.innerText += `<h2 class="track">${data.title}</h2>`;
    
        let img= document.querySelector(".fotos");
        img.innerHTML += `<img class="fotos">${data.track.cover_small}</img>`;
            
        let artista = document.querySelector(".names");
        artista.innerHTML += `<h3 class="names">Artista: <a href="./detail-artist.html?id=${data.artist.id}" class="names">${data.artist.name}</a></h3>`;
        
        let album = document.querySelector(".instajustin");
        album.innerHTML += `<h3>Álbum: <a href="detail-album.html?id=${data.album.id}" class="instajustin">${data.album.title}</a></h3>`;

        let player = document.querySelector(".videoj");
        player.src +=`https://widget.deezer.com/widget/auto/playlist/${id}`
 
    })

    .catch(function(error){
        console.log(error);


//Agregar a playlist.
let playlist = [];

//Recuperar datos del storage
let recuperoStorage = localStorage.getItem('playlist');

//Chequear y agregar la información de local storage en el array
if(recuperoStorage != null){
    agregar = JSON.parse(recuperoStorage);
}

//Chequear que el id esté en el array para cambiar el texto al usuario.
if(playlist.includes(id)){
    document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
}

//Cuando el usuario haga click en "agregar a playlist" Agregar id de track dentro del array.
let agregar = document.querySelector('.agregar');
console.log(agregar);

fav.addEventListener("click", function(e){
    e.preventDefault();

    //Chequear si el id está en el array
    if(playlist.includes(id)){
        let idASacar = agregar.indexOf(id);
        playlist.splice(idASacar, 1);
        document.querySelector('.agregar').innerText = "Agregar a mi playlist";
    } else {
        //Guardamos el id en el array
        agregar.push(id);
        console.log(playlist);
        document.querySelector('.agregar').innerText = "Eliminar de mi playlist";
        
    //Armamos un string
    let agregarParaStorage = JSON.stringify(playlist);
    //Lo guardamos dentro de localStorage
    localStorage.setItem('playlist', agregarParaStorage);
    console.log(localStorage);
    
   
    

}}