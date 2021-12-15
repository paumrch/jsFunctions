// Iteration 3

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento
// y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

  // Primero, definir una variable en que se guarde la cantidad de cada vuelta del bucle que tendremos que recorrer.
  var num = param[0]

  // Escribir un bucle que recorra el array. 

  for (var i = 0; i < param.length; i++) {

    // Aquí la variable num, será la suma de cada vuelta del bucle. Num = num + param[i]
    // Entendiendo que param[i] tendrá el valor de cada vuelta y que la primera es param[0].

      num += param[i]
      
  }

  return num;

}

var resultado = sumAll(numbers)

console.log(resultado)