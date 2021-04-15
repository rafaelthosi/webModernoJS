//na maioria das linguagens, se chamar uma variavel que ainda nao foi declarada, dará erro
console.log('a=', a) //porém, em js existe o hoisting, que coloca a parte "var a" primeiro, sem o valor, por isso retorna undefined
var a = 2 //como a parte 'var a' vai pra cima, aqui é como se fosse apenas 'a = 2'
console.log('a=', a) //aqui a variavel já tem valor

//porém o hoisting só ocorre com var, se for com let ou const dará erro