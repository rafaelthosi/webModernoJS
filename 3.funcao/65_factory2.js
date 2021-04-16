// desafio: criar antes de ver a aula
criarProd = (nome, preco) => {
    const desconto = preco * 0.10
    return {
        nome: nome,
        preco: preco - desconto
    }
}

console.log(criarProd('Tenis', 10))

// jeito do professor:
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))