// capturas el form
//event listener para submit //.length
// prevent default y empezas a preguntar > un if si lo que vino en el campo busqueda es igual a ''
//campo 

//creamos variable

//capturamos el elemento y recibimos string
//let bucar = document.querySelector();
let search = document.querySelector('input')

//creamos un evento
search.addEventListener('submit', function(e){
    //condicinales
    if(search == ''){
        //hago un alert
        alert('El buscador esta vacio');
    }
    e.preventDefault();
})




    