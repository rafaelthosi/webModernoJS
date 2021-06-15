// Desafio: criar uma função chamada filter2(), deverá fazer o mesmo que a filter()
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Minha versão: 

Array.prototype.filter3 = function(callback) { // filter3 para não dar conflito com a versão do professor
    const array = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) array.push(this[index])
    }
    return array
}

const produtosFiltrados = produtos.filter3(p => {
    if (p.preco > 2000 && p.fragil == true) return true
    else return false
})

console.log('\nMinha versão: ', produtosFiltrados)

// Versão do professor:

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log('\nVersão do Professor: ', produtos.filter2(caro).filter2(fragil))