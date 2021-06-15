// Desafio: criar a função map2(), deverá fazer a mesma coisa que o map()

// Minha versão:

Array.prototype.map3 = function(callback) {
    let array = []
    for (let index = 0; index < this.length; index++) {
        array.push(callback(this[index], index, this))
    }
    return array
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const meuResultado = carrinho.map3(paraObjeto).map3(apenasPreco).map3(e => e * 2)
console.log(meuResultado)

// Versão do professor:

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

// const carrinho = [                                 <- Já criado no meu, por isso comentei
//     '{ "nome": "Borracha", "preco": 3.45 }',
//     '{ "nome": "Caderno", "preco": 13.90 }',
//     '{ "nome": "Kit de Lapis", "preco": 41.22 }',
//     '{ "nome": "Caneta", "preco": 7.50 }'
// ]

// Retornar um array apenas com os preços

// const paraObjeto = json => JSON.parse(json)        <- Já criado no meu, por isso comentei
// const apenasPreco = produto => produto.preco       <- Já criado no meu, por isso comentei

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)