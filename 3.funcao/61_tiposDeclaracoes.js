// function declaration (js carrega primeiro todas as funções, depois o código)
console.log(soma(1, 2)) // por este motivo isto não dá erro
function soma(x, y) {
    return x + y
}

// function expression
// console.log(sub(1, 2)) aqui daria erro, porque não é apenas uma função, é a declaração de uma variavel
const sub = function (x, y) {
    return x - y
}

console.log(sub(1, 2)) // apenas depois da variavel ter sido declarada

// named function expression (pouco usada, pode ajudar na hora de debugar para procurar algum problema)
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(1, 2))