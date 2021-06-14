//detalle de genros, un solo dato

let proxyDetGenero = 'https://cors-anywhere.herokuapp.com/';
let GenerosDetPage = 'https://api.deezer.com/genre';
let urlDetalleG = proxyDetGenero+GenerosDetPage;

fetch(urlDetalleG)
.then(function(response){
    return response.json()

})
.then(function(data){
    let info = data.data;
    console.log(info);
    let generosDetPageContainer= document.querySelector('.detallegenero');
    let contenidoGenerosDetPage= '';

    for(let i=0; i<info.length; i++){

        contenidoGenerosDetPage +=   `<h1 class="pag">${info[i].name}</h1>
                                        <img src="${info[i].picture}" alt="" class="fotoa">`
    }
    generosDetPageContainer.innerHTML += contenidoGenerosDetPage
})  
.catch( function(error){
    console.log(error);
})

