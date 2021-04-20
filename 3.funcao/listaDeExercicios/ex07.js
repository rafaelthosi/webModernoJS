// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

resultBhaskara = (a, b, c) => {
    const delta = b * b - 4 * a * c
    console.log(delta)
    if (delta < 0) { return 'Delta é negativo' }
    
    const bhaskaraP = (-b + Math.sqrt(delta)) / (2 * a) //Math.sqrt() retorna a raiz de um número
    const bhaskaraN = (-b - Math.sqrt(delta)) / (2 * a) 

    return [bhaskaraP, bhaskaraN]
}

console.log(resultBhaskara(1, 12, -13))