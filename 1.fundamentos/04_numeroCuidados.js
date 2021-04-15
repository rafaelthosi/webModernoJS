console.log(5 / 0) //como nenhum numero é divisivel por 0, algumas linguagens dariam erro, js retorna o tipo infinity
console.log('10' / 2) //js reconhece que o valor da string pode ser usado em uma operação matematica
console.log('3' + 5) //o resultado da operação seria 8, porém o operador '+' serve para concatenação
console.log('10eF' / 2) //como o valor da string não pode ser usado em uma operação o tipo not a number é retornado
console.log(0.1 + 0.7) //js não é 100% preciso, porém se fosse 0.2 + 0.6 o resultado seria exato
// console.log(10.toString()) //não é possível fazer com numero direto
console.log((10).toString())