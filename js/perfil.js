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

window.addEventListener('load', function() {//controlar que todo el html esté cargado en el navegador

let queryString = location.search;
let datos = new URLSearchParams(queryString);
let mail = datos.get('mail')
let contraseña = datos.get('contraseña')
let user = datos.get('user')


localStorage.setItem('userName', user);
localStorage.setItem('userContraseña', contraseña);
localStorage.setItem('userMail', mail);



let recuperouserName = localStorage.getItem('userName');
let recuperouserContraseña = localStorage.getItem('userContraseña');
let recuperoUserMail= localStorage.getItem('userMail');


let iniciar = document.querySelector('#boton'); 

if(recuperouserName == null){
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = 'Iniciar Sesión'; 
} else {
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = recuperouserName;
}
if(recuperouserContraseña == null){
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = 'Iniciar Sesión'; 
} else {
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = recuperouserContraseña;
}
if(recuperoUserMail == null){
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = 'Iniciar Sesión'; 
} else {
    let login = document.querySelector('.iniciars');
   iniciars.innerHTML = recuperoUserMail;
}

})