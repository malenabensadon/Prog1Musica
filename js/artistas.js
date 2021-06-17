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
            let ArtistasPageContainer= document.querySelector('.listas');
            let ArtistasPage= '';

    for(let i=0; i<info.length; i++){

        ArtistasPage +=   ` <a href="./detail-artist.html?id=${info[i].id}" class="names">${info[i].name}</a>
                            <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}" alt=""></a>`
       
    }
    ArtistasPageContainer.innerHTML += ArtistasPage
})   
.catch( function(error){
    console.log(error);
})
