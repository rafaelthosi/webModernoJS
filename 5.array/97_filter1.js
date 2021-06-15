const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 13.00
}))

// Desafio: tentar filtrar produtos caros e frágeis
// Minha versão: 
const produtosFiltrados = produtos.filter(p => {
    if (p.preco > 2000 && p.fragil == true) return true
    else return false
})

console.log('\nMinha versão: ', produtosFiltrados)

// Versão do professor: 
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log('\nVersão do professor: ', produtos.filter(caro).filter(fragil))