let a = {nome: 'Rafael'} //todo objeto é passado por referencia
let b = a //o que 'a' possui é o endereço de memória deste objeto, então o que 'b' recebe não é este objeto, e sim o mesmo endereço que 'a'
console.log('a: ' + a.nome + '      b: ' + b.nome)
b.nome = 'Larissa' //por 'b' apontar para o mesmo endereço de memoria que 'a', ao mudar em 'b' muda em 'a' também
console.log('a: ' + a.nome + '      b: ' + b.nome)

console.log('--------------') //só um espaço mesmo, pra ficar mais facil de visualizar no console

a = 2 //quando atribuimos um tipo primitivo, como uma letra ou numero, sempre é passado por valor
b = a //como é por valor, b recebe o valor de a, não o endereço deste valor
console.log('a: ' + a + ' b: ' + b)
b++
console.log('a: ' + a + ' b: ' + b)
