// Iteration 4

// Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

  // Y la suma total de los items del array.
  var suma = 0

function average(param) {

  // Un bucle para recorrer el array
  for(var i = 0; i < param.length; i++) {

    suma += param[i];
    var promedio = suma / param.length;

  }

  return (promedio)

}

var totalPromedio = average(numbers)

  console.log(totalPromedio)




  
