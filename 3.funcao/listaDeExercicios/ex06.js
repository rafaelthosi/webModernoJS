// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos

urosSimples = (capInicial, taxaJuros, tempo) => {
    const juros = capInicial * taxaJuros * tempo
    return capInicial + juros
}

jurosComposto = (capInicial, taxaJuros, tempo) => {
    let juros = capInicial,
        valor = capInicial
    for (let index = 0; index < tempo; index++) {
        juros *= taxaJuros
        valor += juros
        juros = valor
    }
    return valor
}

console.log(jurosSimples(1000, 0.06, 2))
console.log(jurosComposto(1000, 0.06, 2))