let valor // variavel não inicializada, apenas declarada
console.log(valor) //não retorna erro, apenas fala que não foi definida ainda
// console.log(valor2) //retorna erro(leia o nome do erro). Undefined é diferente de 'is not defined', a varaivel valor foi criada, mas ainda não recebeu algum valor

valor = null //null significa ausencia de valor, essa é a diferença de undefined para null, undefined significa que ainda não foi definida, null significa que está vazia
console.log(valor)
// console.log(valor.toString()) // Retorna Erro por estar tentando acessar algo de um null

const produto = {}
console.log(produto.preco) // acessar algo undefined(preco) de algo que está definido(produto) não retorna erro
// console.log(produto.preco.nome) // novamente, acessar algo de um null(ou nesse caso undefined) retorna erro. Aqui o erro está no nome tentando acessar o preco(que está undefined)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar declarar undefined, deixar isso para propria linguagem
console.log(produto)
delete produto.preco // modo adequado se quiser deletar o atributo 'preco' do objeto
console.log(produto)

produto.preco = null // sem preco, sempre preferir null do que undefined
console.log(produto)

/*Reforçando, não é possível acessar algo que estaja undefined ou null pelo operado '.'. 
Exemplo(vou fazer fazer comentarios por maiusculas): 
produto = {}
produto.preco = null
console.log(produto.preco) AQUI NÃO DARIA ERRO, POR NÃO ESTAR ACESSANDO ALGO UNDEFINED OU NULL, O QUE preco ESTÁ ACESSANDO TEM UM VALOR(QUE NO CASO É UM OBJETO)
produto.preco.nome = null
console.log(produto.preco.nome) AQUI DARIA ERRO, PORQUE O ATRIBUTO nome ESTÁ ACESSANDO ALGO UNDEFINED OU NULL, QUE É O ATRIBUTO preco
*/