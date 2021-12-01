// Iteración #4: Calcular el promedio

// Calcular un promedio es una tarea extremadamente común. 
//Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
    let avgNumbers = numbers.reduce(function(a,b){
        return a + b;
    }, 0);

    let promedio = avgNumbers / numbers.length;

    return (console.log (promedio))
  
  }
  
  average (numbers);