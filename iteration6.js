// Iteración #6: Valores únicos

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

removeDuplicates(duplicates);

function removeDuplicates(param) {
    let noDuplicates = [];
    for (let index = 0; index < param.length; index++) {
        const element = param[index];
        if (!noDuplicates.includes(param[index])) {
            noDuplicates.push(element);
        }
    }
    console.log('El array con duplicados es: ' + duplicates);
    console.log('El array sin duplicados es: ' + noDuplicates);
}