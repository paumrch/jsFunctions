// iteration 6

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  

  function removeDuplicates(param) {
    for (var i = 0; i < param.length; i++){
        
        // No entiendo este paso, pero he encontrado la solución.

        for (var j = i + 1; j < param.length; j++){

            // Este paso sí que lo entiendo.

            if (param[i] == param[j]){

                // Splice quita el param[j] si es igual que el param[i]. En la posición J quita 1 elemento.

                param.splice(j,1)
            }
        }
    }
    return(param)
}
var finalArray = removeDuplicates(duplicates)
console.log(finalArray)