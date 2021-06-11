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
