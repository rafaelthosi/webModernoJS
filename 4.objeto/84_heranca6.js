function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) { // este operador '...' transforma o parametro em array (neste caso o params será um array)
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // params já é um array, então isto é válido
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)