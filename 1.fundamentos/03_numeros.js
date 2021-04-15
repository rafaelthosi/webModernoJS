const peso1 = 1.0
const peso2 = Number('2.1') //convertendo uma string para number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //vendo de o valor de peso1 é um inteiro (int)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.798
const avaliacao2 = 6.659

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //imprimindo a media com limite de duas casas decimais
console.log(media.toString()) //imprimindo a media como string, mas não converte seu tipo
console.log(typeof media)
console.log(media.toString(2)) //imprimindo a media como binario