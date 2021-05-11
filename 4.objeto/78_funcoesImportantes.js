const pessoa = {
    nome: 'Leonardo',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Esta propriedade aceitará ser listada? 
    writable: false, // Aceitará ter ser valor alterado?
    value: '01/01/2017' 
})

pessoa.dataNascimento = '02/02/2020' // funciona semelhante ao freeze, não retorna erro mas não altera

console.log(pessoa.dataNascimento)
console.log(pessoa) // note que não é listada
console.log(Object.keys(pessoa)) // note que não é listada

const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 1, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena objetos em um. *Se houver atributos iguais o que fica é o ultimo da fila, nesse caso o atributo 'a' terá valor 4

Object.freeze(obj) // congela objeto, não permitindo ser alterado
obj.a = 10

console.log(obj)