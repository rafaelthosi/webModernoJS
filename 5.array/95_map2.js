// Desafio: criar um array que tenha apenas o valor do primeiro array usando map()
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Minha versão:

const resultado = carrinho.map(e => (JSON.parse(e)).preco) 
console.log(resultado)


// Versão do Professor: 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoProfessor = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultadoProfessor)