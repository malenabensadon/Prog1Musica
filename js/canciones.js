// detalle gif
let queryString = location.search //Caputramso qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

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
                            <a href="./detail-artist.html"class="names">by ${info[i].artist.name} </a>
                            <a href="./playlists.html"><img class="favx"src="./img/fav.jpg" alt=""></a>
                            </article>`
       
    }
    CancionesPageContainer.innerHTML += CancionesPage
})   
.catch( function(error){
    console.log(error);
})