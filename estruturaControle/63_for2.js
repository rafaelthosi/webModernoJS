const notas = [6.7, 4.5, 8.4, 9.9, 32]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for(atributo in pessoa) { //se não colocar let o atributo sai do bloco com seu ultimo valor(peso)
    console.log(`${atributo} = ${pessoa[atributo]}`)
}