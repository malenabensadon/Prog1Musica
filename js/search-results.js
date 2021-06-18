//Formulario

//Capturamos el formulario
let formulario = document.querySelector('form');
let buscador = document.querySelector('[name="search"]'); //capturamos el campo que queremos chequear

//creamos la variable del campo
let aviso = document.querySelector('.aviso')

//creamos un evento con evenListener
formulario.addEventListener('submit', function(e){
    e.preventDefault();//prevenimos el comportamiento default

    //condicionales chequeamos el contenido
    if( buscador.value == ""){
        //le aviso al usuario con alert
        aviso.innerText = 'El buscador no puede estar vacío';
    } else if( buscador.value.length < 3){
        //otro alert que avise que necesita mas caracteres
        aviso.innerText = 'Por favor ingrese más de tres caracteres';
    } else {
        this.submit();//enviamos el formulario
    }

})

//limpiamos el mensaje de error cuando el usuario modifica el contenido
buscador.addEventListener('input', function(){
    aviso.innerText= '';

})


// resultados de busqueda

window.addEventListener("load", function(){ //controlar que todo el html esté cargado en el navegador 

    let loader = document.querySelector(".gif");
    loader.style.display = "none"; //esconderlo, si no estoy escribiendo una variable
    
    let queryString = location.search //Caputramso qs
    let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
    let aBuscar = queryStringToObject.get('.......................'); //Acá va el name del campo input del formulario.

    let datoBuscado = document.querySelector('.datoBuscado'); 
    datoBuscado.innerText = `Resultados para ${formulario}`;

let url = `unlink con ${aBuscar}`;

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //Aca muestro código
        console.log(data);
        let info = data.data;
        let section = document.querySelector('.lista');
        let resultados = '';

        for(let i=0; i<info.length; i++){
            resultados+= `<article>
                            <h2>${info[i].title}</h2>
                            <img src="${info[i].images.original.url}">
                        </article>`
        }
        section.innerHTML += resultados
        

    })
    .catch( function(error){
        console.log(error);
    })

    // con body 
    <h2>Resultados de busqueda para: </h2>
    <p class="datoBuscado"></p>
    
    <section class="lista">
        
    </section>

    
    <script src="./js/resultados.js"> </script>
</body>