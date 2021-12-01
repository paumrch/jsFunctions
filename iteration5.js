// Iteración #5: Calcular promedio de strings

// Crea una función que reciba por parámetro un array y cuando es un valor number 
// lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

averageWord(mixedElements);

function averageWord(param) {

    let average;
    let sumElements = 0;
    let totalElements = param.length;
    
    param.forEach(element => {
        
        if ('number' === typeof element) {
            sumElements += element;
        } else {
            sumElements += element.length;
        }
    });

    average = sumElements / totalElements;

    console.log('El promedio de este array ' + param + ' es: ' + average.toFixed(2));

}