//url + proxy de albumes
let proxyAlbumes = 'https://cors-anywhere.herokuapp.com/'
let AlbumesPage = 'https://api.deezer.com/chart/0/albums'
let urlAlbumes = proxyAlbumes+AlbumesPage

fetch(urlAlbumes)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let albumesPageContainer= document.querySelector('.listas');
    let contenidoAlbumesPage= '';

    for(let i=0; i<info.length; i++){

        contenidoAlbumesPage +=   `<article class="album">
                    <a href="./detail-album.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}" alt=""></a>
                    <h2 class="texto"><a href="./detail-album.html" class="names">${info[i].title}</a></h2>
                    <h4><a href="./detail-artist.html" class="names">by ${info[i].artist.name}</a></h4> 
            
                    </article>`
    }
    albumesPageContainer.innerHTML += contenidoAlbumesPage
})   
.catch( function(error){
    console.log(error);
})
