const valores = [1.0, 2.0, 3.0, 10.0] //criando array de forma literal
console.log(valores[0], valores[3])
console.log(valores[4]) //js não retorna erro ao tentar acessar um elemento indefinido, apenas retorna o tipo undefined

valores[4] = 20
console.log(valores) //retorna todos elementos do array(vetor)
valores[10] = 50
console.log(valores) //retorna todos os valores mostrando quais estão vazios
console.log(valores.length) //retorna tamanho de array

valores.push('Larissa', 'Rafael') //adiciona valores ao array
console.log(valores)

console.log(valores.pop()) //RETIRA o ultimo valor do array, imprimindo-o desta vez
console.log(valores)
delete valores[0]
console.log(valores)