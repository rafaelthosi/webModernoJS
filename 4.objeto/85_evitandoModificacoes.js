// Object.preventExtensions: não permite adicionar novos elementos
const produto = Object.preventExtensions({ // cria um objeto o limitando de ter apenas os atributos passados aqui
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})
console.log(Object.isExtensible(produto)) // verifica se o objeto aceita ser extendido

produto.nome = 'borracha' // alterar um atributo é possível,
produto.descricao = 'asfsafsaf' // adicionar um não
delete produto.tag // deletar também é possível

console.log(produto)

// Object.seal: não permite adicionar novos elementos nem deletar existentes
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log(Object.isSealed(produto)) // verifica se o objeto está selado

pessoa.sobrenome = "silva"
pessoa.nome = 'Mari'
delete pessoa.nome

console.log(pessoa)

// Object.freeze: faz o Object.seal e ainda não permite alterações nos atributos