// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array
// y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(param, name) {
  let res = false;
  let pos;

  for (var i = 0; i < param.length; i++) {
    if (name == param[i]) {
      res = true;
      pos = i + 1;
    }
  }
  if (res == true) {
    return [res, pos];
  } else {
    return [res];
  }
}
var a = finderName(nameFinder, "Clint");

console.log(a);
