const notas = [4.4, 5.5, 6.6, 1.8, 7.7, 9.9, 2.5, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (n) { // filter vai ser chamado para cada elemento em notas, e vai adicionar valor a notasBaixas2 se a condição der true
    return n < 7 // n é menor que 7? se sim, return n
})


const notasBaixas3 = notas.filter(n => n < 7)

console.log(notasBaixas2)
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)