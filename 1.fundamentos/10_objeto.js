const prod1 = {} // chaves são para objetos, colchetes para arrays
prod1.nome = 'Babador'
prod1.preco = 34
prod1['desconto legal'] = 23 // evitar dar espaços ao atributo, porém é possível

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 67.10,
    obj: {
        blablabla: 1,
        obj2: {
            blablabla: 2
        }
    }
}

console.log(prod2)