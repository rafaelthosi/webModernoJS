//escopos de let: função, bloco e global
let numero = 1
let numero2 = 3
{
    let numero = 2
    console.log('dentro =', numero) //let tem escopo de bloco, ou seja, se declarada dentro de um bloco, a variavel só é visivel neste bloco
    console.log('teste', numero2) //se não acha a variavel dentro do bloco, procura fora. Mas a PRIORIDADE é sempre do bloco
}
console.log('fora =', numero) //como a variavel foi redeclarada dentro de um bloco, essa redeclaração é ignorada

//detalhe, let não pode ser redefinido, porém se for dentro de um bloco não tem problema
