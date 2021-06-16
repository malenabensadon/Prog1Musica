//url + proxy de albumes
let proxyArtistas = 'https://cors-anywhere.herokuapp.com/';
let ArtistasPage = 'https://api.deezer.com/chart/0/artists';
let urlArtistas = proxyArtistas+ArtistasPage;

fetch(urlArtistas)
        .then(function(response){
            return response.json()
            })

        .then(function(data){
            let info = data.data
            console.log(info);
            let ArtistasPageContainer= document.querySelector('.caja');
            let ArtistasPage= '';

    for(let i=0; i<info.length; i++){

        ArtistasPage +=   ` <a href="./detail-artist.html" class="names">${info[i].name}</a>
                            <a href="./detail-artist.html"><img class="fotos" src="${info[i].picture_small}" alt=""></a>`
       
    }
    ArtistasPageContainer.innerHTML += ArtistasPage
})   
.catch( function(error){
    console.log(error);
})
