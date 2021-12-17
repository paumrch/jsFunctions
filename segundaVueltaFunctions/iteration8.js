
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {

    // Array vacío para introducir las repeticiones de cada item del array principal

    let repeticiones = []

    // Bucle for para que recorra el array principal

for (var i = 0; i < param.length; i++){

        // En cada vuelta de i, se contará 1. Y por tanto se añadirá al array una palabra.

    repeticiones[i] = 1

        // En cada vuelta se ejecutará otro bucle que dice que la var j es la var i + 1, es decir, cuando en el array principal se encuentra una palabra igual dos veces.

    for (var j = i + 1; j < param.length; j++){

            // Con un condicional que sí entiendo. Si param i es igual a param j, en el array de repeticiones se suma 1 y la posición j, se quita con el splice. Por tanto se reduce el array.
            if(param[i] == param[j]){

            repeticiones[i] += 1
            param.splice(j,1)

            }
        }
    }

    // Necesitamos retornar tanto param, como las repeticiones. Y como son dos Arrays distintos realizamos un array de arrays.

    return [param,repeticiones]
}
var a = repeatCounter(counterWords)
console.log(a)