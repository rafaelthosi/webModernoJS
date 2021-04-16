// função factory serve para simplicar, por exemplo, isto:
const prod1 = {
    nome: 'telefone',
    preco: 100
}
const prod2 = {
    nome: 'celular',
    preco: 1000
}

// factory simples

function criarProd () {
    return {
        nome: 'celular',
        preco: 1000
    }
}

console.log(criarProd())