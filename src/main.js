//GLOBALES
const pokeData = POKEMON.pokemon;

/* Manejo del DOM */

const menu = document.getElementById('menu');
const contenedor = document.getElementsByClassName('container');  
const principal = document.getElementById('principal'); 


//  Mostrar menú
const btntoggle = document.querySelector(".icono");
btntoggle.addEventListener('click', ()=>{
    document.querySelector(".menu").classList.toggle('abrir');
    document.querySelector(".icono").classList.toggle('icono-posicion');
    // document.querySelector("#footer").classList.toggle('ancho');
    const contenedor = document.getElementsByClassName('container');
    contenedor[0].classList.toggle('ancho');
    contenedor[1].classList.toggle('ancho');
});

// animaciones lista del menú
const drowdown = document.getElementsByClassName('dropdown');
const listado = document.getElementsByClassName('listado');

for(let i = 0; i < drowdown.length; i++){
  drowdown[i].addEventListener('click', ()=>{
    for(let j = 0; j < listado.length; j++){
      if(i != j){
        listado[j].classList.remove('activar');
      }
    }
    listado[i].classList.toggle('activar');
  }); 

}



// Mostrar Pokemones
const clases = (objeto)=>{
    let clase = '';
    switch (objeto){
      case "Grass":
        clase = 'Planta';
        break;
      case "Poison":
        clase = 'Veneno';
        break;
      case "Fire":
        clase = 'fuego';
        break;
      case "Flying":
        clase = 'volador';
        break;
      case "Water":
        clase = 'agua';
        break;
      case "Bug":
        clase = 'bicho';
        break;
      case "Normal":
        clase = 'normal';
        break;
      case "Electric":
        clase = 'electrico';
        break;
      case "Ground":
        clase = 'tierra';
        break;
      case "Fighting":
        clase = 'lucha';
        break;
      case "Psychic":
        clase = 'psiquico';
        break;
      case "Rock":
        clase = 'roca';
        break;
      case "Ice":
        clase = 'hielo';
        break;
      case "Ghost":
        clase = 'fantasma';
        break;
      case "Dragon":
        clase = 'dragon';
        break;
    }
    return clase;
}

const mostrarTipos = (objeto,num) =>{
    let tipo = ' ';
    if (objeto[num].type.length == 2){
        tipo = ` 
        <p class="${clases(objeto[num].type[0])}">${objeto[num].type[0]}</p>
        <p class="${clases(objeto[num].type[1])}">${objeto[num].type[1]}</p>`;
    }else{
        tipo = ` 
        <p class="${clases(objeto[num].type[0])}">${objeto[num].type[0]}</p>`;
    }
    return tipo;
}

const loadPokemon = (objeto) => { 
	let mostrar = ' ';
	for (let i = 0; i < objeto.length; i++) {
        let tipos = mostrarTipos(pokeData,i);
        let llamar = `
        <div class="card">
        <img src="${objeto[i].img}" alt="" class="card-img">
        <div class="card-body">

          <p class="card-num">N.°${objeto[i].num}</p>
          <h5 class="card-title">${objeto[i].name}</h5>
          <p class="card-text">Tipo:</p>
          <div class="tipo">
            ${tipos}
          </div>

        </div>
      </div> `;
		mostrar += llamar;
	}
	return mostrar;
};



principal.innerHTML = loadPokemon(pokeData);
/*
    Descripción: Creamos una función que recorra el objeto y luego le pasamos el objeto pokedata para que aplique lo establecido.
    función mostrarPoke
    Le pasamos el objeto mostrarPoke(pokeData)
    Pokedata es nuestro objeto
*/

const tipos = {
    tipo : ['Grass','Poison','Fire','Flying','Water','Bug','Normal','Electric','Ground','Fighting','Psychic','Rock','Ice','Ghost','Ghost'],
    relleno: ['#9bcc50','#b97fc9','#fd7d24']
};

// Gráfico
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Grass', 'Poison', 'Fire', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },

    options: {
      layout: {
          padding: {
              left: 30,
              right: 10,
              top: 0,
              bottom:0
          }
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      },
      title: {
        display: true,
        text: 'PokeData',
        fontSize: 30,
    },
    
  }
});
