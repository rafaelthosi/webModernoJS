function MeuObjeto() {} // função construtora
console.log(MeuObjeto.prototype, '- diferente de -', Object.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {} // aqui o prototype dele é Object.prototype
obj3.__proto__ = MeuObjeto.prototype // e aqui vira para MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log('-----\nresumo:\n-----')
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // MeuObjeto é uma função, por mais que ele tenha o .prototype, ele também contém um prototipo, que por padrão aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // O protótipo do protótipo de uma function aponta para Object.prototype
console.log(Object.prototype.__proto__ === null) // != de undefined
