// detalhe: 123 e 456 são representações de endereço de memória

// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }

// não mudou o valor da constante(que é o endereço de memória)
pessoa.nome = 'Maria'

console.log(pessoa)

// aqui dará erro, porque está mudando o valor da constante, está apontando para outro endereço de memória
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Joao' }

Object.freeze(pessoa) // não permite alterações nesse objeto, tornando o objeto constante

pessoa.nome = 'João'
delete pessoa.nome
pessoa.end = 'Rua ABC'

console.log(pessoa)

// Para na declaração de uma constante já a fazer aponta para um obj constante
const pessoaConstante = Object.freeze({ nome: 'Enzo' })

pessoaConstante.nome = 'Jorge'
console.log(pessoaConstante)