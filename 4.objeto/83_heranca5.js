console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { // Este método 'reverse' não existe, aqui estamos criando ele no prototipo de String
    return this.split('').reverse().join('') // reverse() é um método de um array(split transforma em array)
}

// Agora, se quiser reverter uma String basta usar .reverse

console.log('Testando'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())

// Cuidado!!
// É possível substituir métodos existentes, porém gerará varios efeitos colaterais
// Não faça isso

String.prototype.toString = function () {
    return 'lascou tudo'
}

console.log('teste'.reverse()) // Efeito colateral