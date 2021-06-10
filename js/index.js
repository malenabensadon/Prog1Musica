// capturas el form
//event listener para submit //.length
// prevent default y empezas a preguntar > un if si lo que vino en el campo busqueda es igual a ''
//campo 

let buscar 


//Gifs trending


let url = 'https://api.giphy.com/v1/gifs/trending?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&limit=10&rating=g'

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        //Aca muestro código
        console.log(data);
        let arrayInfo = data.data
        let lista = document.querySelector('.lista');
        let contenidoLista =''; //poner el contenido a mostrar dentro de la lista.

        for(let i=0; i<arrayInfo.length; i++){
            contenidoLista += `<li> 
                                    <a href="detalle.html?id=${arrayInfo[i].id}">
                                     ${arrayInfo[i].title}
                                    </a>
                                </li>`
        }
        
        lista.innerHTML += contenidoLista


    })
    .catch( function(error){
        console.log(error);
    })

    // con body 
    <h2>Buscador de gifs</h2>
    <form action="resultados.html" method="GET">
    <input type="text" name="milanesa" value="">
    <button type="submit">Buscar</button>
</form>


<h1>Gifs trending</h1>
<ul class="lista">

</ul>


<script src="./js/index.js"> </script>
</body>