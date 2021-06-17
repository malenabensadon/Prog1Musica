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
            let artistasPageContainer= document.querySelector('.listas');
            let artistasPage= '';

    for(let i=0; i<info.length; i++){

        artistasPage +=   `  <article class="caja"> 
                            <a href="./detail-artist.html" class="names">${info[i].name}</a>
                            <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}" alt=""></a>
                            </article>`
       
    }
    artistasPageContainer.innerHTML += artistasPage
})   
.catch( function(error){
    console.log(error);
})
