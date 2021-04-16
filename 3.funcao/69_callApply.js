function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

console.log(getPreco()) //this apontando para global
global.preco = 20
global.desc = 0.1
console.log(getPreco())

// call e apply
const carro = { preco: 90000, desc: 0.20 }

console.log(getPreco.call(carro)) // Desta maneira os dois tem o mesmo papel,
console.log(getPreco.apply(carro)) // fazer o this aponta para o obj carro

// Diferença

console.log(getPreco.call(carro, 0.2, '$')) // Em call() o primeiro valor é sempre o obj, os outros são os parametros
console.log(getPreco.apply(carro, [0.2, '$'])) // Em apply() os params são colocados dentro de um array que vem depois do obj 