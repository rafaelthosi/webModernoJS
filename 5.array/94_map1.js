const nums = [1, 2, 3, 4, 5]

// map é um For com propósito
let resultado = nums.map(function(e) { // percorre o array inteiro, multiplicando por 2 cada elemento
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReal = e => `R$ ${e.toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraReal) // as funções são executadas da esquerda para direita(soma10, triplo, paraReal)
console.log(resultado)