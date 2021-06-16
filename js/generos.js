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
    let generosPageContainer= document.querySelector('.listas');
    let contenidoGenerosPage= '';

    for(let i=0; i<10; i++){

        contenidoGenerosPage +=   ` <article class="caja"> 
                                    <li> 
                                     <a href="./detail-genres.html" class="names">${info[i].name}</a> 
                                     <a href="./detail-genres.html"><img class="fotos" src="${info[i].picture_medium}" alt="FOTO GENERO LATINO"></a>
                                    </li>
                                    </article>`
             
    }

    generosPageContainer.innerHTML += contenidoGenerosPage
})  
.catch( function(error){
    console.log(error);
})



