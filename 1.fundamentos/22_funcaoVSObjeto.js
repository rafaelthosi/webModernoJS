console.log(typeof Object) //um objeto é uma função
console.log(typeof new Object) //new retorna uma instancia desse objeto, e isso retorna tipo objeto

const Cliente = function() {}
console.log(typeof Cliente) //a variavel que recebeu uma função tem tipo função também
console.log(typeof new Cliente) //ta instanciando a função, vira um objeto

class Produto {} //class é um outro jeito de declarar uma função
console.log(typeof Produto)
console.log(typeof new Produto())