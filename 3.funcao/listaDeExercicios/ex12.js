// Faça um algoritmo que calcule o fatorial de um número.

retornaFatorial = numero => {
    let resultado = numero
    for (let auxiliar = numero - 1; auxiliar != 1; auxiliar--) {
        resultado *= auxiliar
    }
    return resultado
}

console.log(retornaFatorial(12))