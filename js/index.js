let proxy = 'https://cors-anywhere.herokuapp.com/'
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

        for(let i=0; i<info.length; i++){
            contenidoTrack += `<li class="caja"> 
                                        <a href="./detail-track.html?id=${info[i].id }"><img class="fotos" src="${info[i].album.cover_medium}"
                                        alt=""></a> <a href="./detail-track.html"class="names">${info[i].title}</a> <a href=".playlists.html"></a><a href="./detail-artist.html"class="names">${info[i].artist.name}</a>
                                        <a href="./playlists.html"><img class="favx"src="./img/fav.jpg"alt=""></a>
                                </li>`
        }
        trackContainer.innerHTML += contenidoTrack
    })

//url + proxy
let proxy2 = 'https://cors-anywhere.herokuapp.com/'
let topAlbums = 'https://api.deezer.com/chart/0/albums'
let url2 = proxy2+topAlbums

fetch(url2)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let albumContainer= document.querySelector('.albumes');
    let contenidoAlbum= '';

    for(let i=0; i<info.length; i++){

        contenidoAlbum += `<li class="caja">
                             <a href="./detail-album.html?id=${info[i].id}"><img class="fotos" src="${info[i].cover_medium}"></a>
                             <a href="./detail-album.html" class="names">${info[i].title}</a>
                             <a href="./detail-artist.html"class="names">by ${info[i].artist.name}</a>
                           </li>`
    }
    albumContainer.innerHTML += contenidoAlbum
})   

//url + proxy
let proxy3 = 'https://cors-anywhere.herokuapp.com/'
let topArtists = 'https://api.deezer.com/chart/0/artists'
let url3 = proxy3+topArtists

fetch(url3)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data
    console.log(info);
    let artistsContainer= document.querySelector('.artistas');
    let contenidoArtists= '';

    for(let i=0; i<info.length; i++){

        contenidoArtists += `<li class="caja">
                                 <a href="./detail-artist.html" class="names">${info[i].name}</a>
                                 <a href="./detail-artist.html"><img class="fotos" src="${info[i].picture_medium}" alt=""></a>
                            </li>`
    }
    artistsContainer.innerHTML += contenidoArtists
})   