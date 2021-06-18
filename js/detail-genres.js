let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let detalleGeneros = `https://api.deezer.com/genre/${id}`;
let urlDetGenero = proxy + detalleGeneros;


fetch( urlDetGenero )
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let genero = document.querySelector('.pag'); 
        genero.innerText += data.name;
    
        let foto = document.querySelector(".fotoaa");
        foto.src = data.picture_medium;

      
        let urlGeneros1 = `https://api.deezer.com/genre/${id}/artists`;
        let urlGeneros2 = proxy + urlGeneros1;

        fetch(urlGeneros2)
        .then(function(response){
            return response.json()

            })
            .then(function(data){
                let info = data.data;
                console.log(info);
                let generosPageContainer= document.querySelector('.artistasg');
                let contenidoGenerosPage= '';

                for(let i=0; i<30; i++){

                    contenidoGenerosPage +=   `<li>${info[i].name} </li>`
                        
                }

                generosPageContainer.innerHTML += contenidoGenerosPage
            
                })

    .catch(function(error){
        console.log(error);
    })  })
