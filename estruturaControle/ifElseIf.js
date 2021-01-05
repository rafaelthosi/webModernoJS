Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}
// const n = 8
// console.log(n.entre(9, 10))
const imprimeResult = nota => {
    if(nota.entre(6,10)) {
        console.log("Aprovado!")
    } else if (nota.entre(0, 5.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida! Insira outra novamente por favor.')
    }
}

imprimeResult(8)
imprimeResult(3)
imprimeResult(-1)