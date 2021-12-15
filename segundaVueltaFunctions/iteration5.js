// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume.
// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

var nums = 0
var words = 0

function averageWord(param) {


    // Pude completarla, pero me estaba equivocando en la sintaxis del typeof. Por lo demás, ok.

    for(var i = 0; i < param.length; i++) {
        if (typeof param[i] === "number") {
            nums += param[i]
        } else {
            words += param[i].length
        }
    }

    var total = nums + words

    return total
    
}

var solution = averageWord(mixedElements)

console.log(solution)