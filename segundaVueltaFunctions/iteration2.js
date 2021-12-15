// Iteration2

// Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(param) {
  
    // 1. Leer y contar todos los items del array. 
    // Primero creamos una variable local que pueda leer cada item.

    var longestWord = param[0]

    // Escribimos el bucle que vaya palabra por palabra.

    for (var i = 0; i < param.length; i++) {

        // Si la variable i, que es cada palabra del array es más larga que param[0], 
        // longestWord se convierte en param[0], es decir, en la palabra más larga.
        // Por tanto, en cada vuelta, se va comprobando si la palabra param[i] es más larga y por tanto, sustituyendo a longestWord.

        if(param[i].length > longestWord.length) {
            longestWord = param[i]
        }
    }

    // Ahora habría que retornar longestWord y ya estáría.

    return(longestWord)

}

let solution = findLongestWord(avengers)

console.log(solution)