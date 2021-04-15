function rand([min = 0, max = 1000]) { //note que dessa vez é um array, não um obj 
    if (min > max)[min, max] = [max, min] //se o min for maior que o max, eles são trocados
    const valor = Math.random() * (max - min) + min
    return Math.ceil(valor) //ceil arredonda para cima
}

console.log(rand([50, 40])) //aqui o min é maior que o max, porém na função há a troca
console.log(rand([10])) //pega o segundo valor como o valor que passamos predefinido(1000)
console.log(rand([, 10])) //pega o primeiro valor como o predefinido(0)
console.log(rand([])) //pega os dois predefinidos
//console.log(rand()) //aqui da erro, por não ser possivel ler algo de um undefined, como o destruc desestrutura algo, esse algo não pode ser undefined(ou null). Como já vimos antes, um undefined não da erro, porém ler algo de um undefined da erro