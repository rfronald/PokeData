/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const ordenarAbc = (objeto, tipo) => {
  switch  (tipo) {
    case 'asc':
      return objeto.sort((prev, next)=>{
        if(prev.name > next.name){
          return 1;
        }else{
          return -1
        }
      });
      break;
    case 'dsc':
      return objeto.reverse(name);
      break;
  }
};

// ORDENAR SPAW frecuencia de aparición
const ordenarSpaw = (data) => {
  return data.sort((objeto1, objeto2) => objeto1.avg_spawns - objeto2.avg_spawns);
};

//Filtrar por tipo

const filtrarTipo = (data,type)=>{
   const poke =  data.filter((objeto)=>{
    return objeto.type[0] == type || objeto.type[1] == type;
   });

   return poke;
};

//Filtrar por debilidad

const filtrarDebilidad = (data,debilidad)=>{
  return data.filter((objeto)=>{
     return objeto.weaknesses.indexOf(debilidad) >  -1;
  });
};

//Filtrar por Huevo en Kilometros

const filtrarhuevo = (data,kilometros)=>{
  return data.filter((objeto)=>{
     return objeto.egg.indexOf(kilometros) >  -1;
  });
};

// DATA BUSCAR
const busco = (data, buscado) => {
  return data.filter(obj => obj.name.toLowerCase().startsWith(buscado)); 
  // Filter va a crear un array donde va rellenar todos los elementos que pasa un prueba
};


// window.example = example;
window.ordenarAbc = ordenarAbc;
window.ordenarSpaw  = ordenarSpaw;
window.filtrarTipo = filtrarTipo;
window.filtrarDebilidad = filtrarDebilidad;
window.filtrarhuevo = filtrarhuevo;
window.busco = busco;


