console.log('01.', '1' == 1) //comparando se '1' é igual a 1 (a string com 1 é igual ao numero 1)
console.log('02.', '2' === 2) //comparando se '2' é identico a 2 
console.log('03.', '3' != 3) //vendo de '3' é diferente de 3
console.log('04.', '4' !== 4) //vendo se '4' é estritamente diferente de 4

console.log('05.', 5 < 4)
console.log('06.', 5 > 4)
console.log('07.', 5 <= 4)
console.log('08.', 5 >= 4)

const d1 = new Date(0) //date(0) pega a data padrão da linguagem, que é 01/01/1970. d1 recebe um valor como referencia, ou seja, está apontando um espaço na memoria, o que ele está recebendo é um endereço
const d2 = new Date(0)

console.log('09.', d1 === d2) //como as duas contem endereços diferentes, da false
console.log('10.', d1 == d2) //aqui também da false, pelo mesmo motivo, são coisas diferentes
console.log('11.', d1.getTime()) //nesse caso estamos comparando as duas datas(a func getTime pega a data)
console.log('12', d1.getTime() == d2.getTime())

console.log('13', undefined == null)
console.log('14', undefined === null)