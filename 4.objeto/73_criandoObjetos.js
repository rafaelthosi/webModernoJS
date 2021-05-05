// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objetct em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)        // Conseguem acessar apenas
const p2 = new Produto('Notebook', 2399.99, 0.25)   // o nome e a função

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 9999, 15)
const f2 = criarFuncionario('Maria', 9999, 10)

console.log(f1.getSalario(), f2.getSalario())

// Uma função famosa que retorna objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)