const [n] = [10] //destruc [a] pegando o valor do array [10]
console.log(n)
const [, a, , b] = [0, 1, 2, 3] //destruc [, a, , b] ignora o primeiro valor do array, pega o segundo para 'a', ignora o terceiro valor e pega o quarto para 'b'
console.log(a, b)
//lembrando que o destruc transforma em variavel, a e b são variaveis que receberam valores do array
const [, , c] = [10, 20] //aqui ele ignorou os dois elementos do array(10 e 2), como não pegou valores recebe undefined
console.log(c)
const [, d = 2] = [10] //ignorou o unico valor do array porém recebeu um valor predefinido
console.log(d)


//agora vem um caso complexo, que ele mostrou apenas pra gente saber como é
const [, [, nota]] = [[, 8, 9], [9, 6, 7]] //destruc ignora o primeiro valor(nesse caso é o array [, 8, 9]) e pega o segundo elemento do array contido no segundo elemento(que é [9, 6, 7])
console.log(nota)