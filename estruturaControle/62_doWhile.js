function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda para baixo
}

let opcao = -1 //mesmo número da condição, se fosse while ele nem entraria no laço

do {
    opcao = getInteiroAleatorioEntre(-1, 10) //muda o valor(ou não) da variável, assim ele não necessariamente para no final do código
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log("Até mais!")