const escola = "Cod3r" // possui 5 caracteres, sendo o 5º representado por 4 (0, 1, 2, 3, 4)

console.log(escola.charAt(4)) // retorna caracter de indice 4
console.log(escola.charAt(5)) // js não volta erro, apenas retorna nenhum valor
console.log(escola.charCodeAt(3)) // retorna o valor da tabela ASCII que representa o caracter do indice 3
console.log(escola.indexOf("d")) // retorna o indice do caracter "d"

console.log(escola.substring(2)) // cria uma substring a partir do indice 2
console.log(escola.substring(2, 4)) // cria uma substring que começa no indice 2 e acaba no 3

console.log(escola.replace('r', '#')) // substitui o caracter por #
console.log('Escola '.concat(escola).concat('!')) // concatena uma string com a variavel escola e depois com outra string
console.log('Escola ' + escola + '!') // faz a mesma coisa que o anterior

console.log('Larissa,Rafael,Luna,Donald,Serena'.split(',')) // passa a string para um array(vetor) separando cada elemento por virgula([0] = 'Larissa', [1] = 'Rafael'... [4] = 'Serena')
