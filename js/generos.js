// detalle gif
let queryString = location.search //Caputramso qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

//url + proxy de albumes
let proxyGeneros = 'https://cors-anywhere.herokuapp.com/';
let GenerosPage = 'https://api.deezer.com/chart/0/tracks';
let urlGeneros = proxyGeneros+GenerosPage;

fetch(urlGeneros)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let GenerosPageContainer= document.querySelector('.listas');
    let GenerosPage= '';

    for(let i=0; i<info.length; i++){

        GenerosPage +=   ` <article class="caja"> 
                            <a href="./detail-genre.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"alt=""></a> 
                            <a href="./detail-genre.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a>
                            <a href="./detail-artist.html"class="names">by ${info[i].artist.name} </a>`
                            
       
    }
    GenerosPageContainer.innerHTML += GenerosPage
})   
.catch( function(error){
    console.log(error);
})