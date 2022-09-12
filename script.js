const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const parrafo = document.querySelector('parrafo');
const input = document.querySelector('input');
const parrafoC = document.getElementById('parrafo');

console.log(parrafo);
console.log(document.querySelector('h1' ));
console.log(
    {
        h1,
        p,
        parrafito,
        parrafo,
        input
    }
);

//innerHTML , CAMBIA EL titulo del html
//innetTEXT, cambia en forma de texto, no lee el br
h1.innerHTML = 'Cambiando el titulo <br> Feo';
//getAttribute, obtiene el nombre de la clase del h1
console.log(h1.getAttribute('class'));
//setAttribute, cambia el id, clase, por uno ddado.
h1.setAttribute('class','cambiandoClase');
console.log(h1.getAttribute('class'));

//.classList añade, elimina, o verifica con respceto a las clsaes
h1.classList.add('otraClase');
h1.classList.remove('cambiandoClase');
//toogle, si la clase no existe la agrega
h1.classList.toggle('clase'); // si existe la clase, la elimina
var existe = h1.classList.contains('otraClase');
console.log(existe);  

input.value = "HOLA";
//createElement crea un elemento
const img=document.createElement('img');
img.setAttribute('src','https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg');
img.width = 100;

parrafoC.innerHTML = "";
parrafoC.append(img);