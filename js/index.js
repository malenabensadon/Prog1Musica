// capturas el form
//event listener para submit //.length
// prevent default y empezas a preguntar > un if si lo que vino en el campo busqueda es igual a ''
//campo 

//creamos variable

//capturamos el elemento y recibimos string
//let bucar = document.querySelector();
let buscar = document.querySelector('form')
let campoBuscar = document.querySelector('[name="search"]')

//creamos un evento
buscar.addEventListener('submit', function(event){
    event.preventDefault();
    //condicinales
    if(campoBuscar.value == ""){
        //hago un alert
        alert('El buscador esta vacio');
    }else{
        this.submit()
    }
    
})

//limpiar el mensaje de error cuando el usuario modifique el contenido del campo input. 
campoBuscar.addEventListener('input', function(){
    alert.innerText = "";
})



    