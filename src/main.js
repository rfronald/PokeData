/* Manejo del DOM */

document.querySelector("#welcome").classList.add('cargar');

const btntoggle = document.querySelector(".mostrar");
btntoggle.addEventListener('click', ()=>{
    document.querySelector(".barra2").classList.toggle('active');
    document.querySelector(".opciones").classList.toggle('hide');
});

