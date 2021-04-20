// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

baseExpoente = (b, e) => {
    let resultado = b
    for (let i = 1; i < e; i++) {
        resultado *= b
    }
    return resultado
}

console.log(baseExpoente(4, 7))