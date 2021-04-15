// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b) //ao ser chamada a função retornara o resultado da soma no console
}

imprimirSoma(2, 3)

// armazenando função arroz em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 3))

// quando a função tem apenas uma linha, podemos abreviar deste jeito:
const subtracao = (a,b) => a - b

console.log(subtracao(3, 6))

// tentando encurtar ainda mais, se a função tiver apenas um paramentro, podemos fazer deste jeito:
const menos1 = a => console.log(a - 1) // note que o paramentro(o que vem antes da arrow) está sem os parenteses

menos1(3)