console.log(Math.ceil(6.1)) //só pra ver o acesso pelo ponto

const obj1 = {}
obj1.nome = 'bola' //acessando o atributo nome(nesse caso definindo o atributo nome ao objeto também)
console.log(obj1.nome)

function Obj(nome) {
    this.palavra = nome //this serve para deixar publica a variavel, ou seja, de qualquer lugar poderemos acessa-la
    this.exec = function() { //ainda sobre this, note que nem precisamos declarar a variavel(var, let ou const)
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') //instanciamdo a função Obj com new
const obj3 = new Obj('Mesa')
console.log(obj2.palavra)
console.log(obj3.palavra)
obj3.exec()