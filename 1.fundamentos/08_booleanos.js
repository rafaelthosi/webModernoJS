let isAtivo = true
console.log(isAtivo)
isAtivo = false
console.log(isAtivo)
isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo) //nega o valor de isAtivo, transformado o valor da variavel em boolean false
console.log(!!isAtivo) //nega a negação de isAtivo, voltando o valor para o original

//true
console.log('casos que são true:')
console.log(!!3)
console.log(!!-3)
console.log(!!' ')
console.log(!!'abc')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// false
console.log('\n casos que são false:')
console.log(!!0)
console.log(!!'') //string vazia. Exemplo de uso: testar se um campo foi preenchido
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//finalizar
console.log('finalizando...')
console.log(!!('' || null || 0 || 'epa')) // como ||(OU) é usado, se tiver um true o valor retornado será true
console.log(('' || null || 0 || 'epa')) //retorna o primeiro valor true que encontrar

//bonus
console.log('final...')
let nome = ''
console.log(nome || 'Desconhecido') // Se nome for vazio o valor "Desconhecido" é retornado, é um jeito de deixar respostas padrão
nome = 'Rafael'
console.log(nome || 'Desconhecido')