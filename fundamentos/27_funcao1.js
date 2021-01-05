// função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //passando o total de valores que a função tem
imprimirSoma(2) //passando apenas um valor, normalmente daria erro, porém js coloca o outro numero como undefined e a soma vira de um numero + um undefined, o que resulta em NaN(Not a Number)
imprimirSoma(2, 3, 4, 5, 6) //ao passar mais valores do que o total, os que estão sobrando apenas seráo ignorados
imprimirSoma() //aqui fica uma soma de undefined com undefined, o que não resulta em erro também

//função com retorno
function soma(a, b = 1) { //colocando um valor padrão para a variavel, se colocarmos apenas valor para 'a', a função automaticamente da valor para 'b', porém se colocrmos para 'a' e para 'b', nada acontece (Se não entendeu, tem exemplo abaixo)
    return a + b
}

console.log(soma(3, 3)) //somando 3 + 3
console.log(soma(3)) //somando 3 + 1, porque colocamos valor padrão para 'b'