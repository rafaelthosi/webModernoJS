const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // por padrão aponta para Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Object.prototype não possui proto

// Toda função possui o .prototype. *Object é uma função

function MeuObjeto() {}

console.log(Object.prototype, MeuObjeto.prototype)