// Iteration #7

// Crea una función que reciba por parámetro un array y el valor que desea comprobar 
// que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true 
// y la posición de dicho elemento y por la contra un false.  
// Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param) {


    let name = console.log('¿Como te llamas?')
  let namePos 
  for(i = 0; i < param.length; i++) {
    if(name == param[i]) {
      namePos = nameFinder.indexOf(param[i])
      return [true, namePos]
      }
    }
  if(name != param[i]) {
    return [false]
  }
  }
let solucion = finderName(nameFinder)
console.log(solucion)