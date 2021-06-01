const gatos = ['luna', 'donald', 'lika']

// forEach tem três parametros:
// 1. Elemento
// 2. Indice do elemento
// 3. Array completo

console.log('Imprimindo apenas o elemento')
gatos.forEach(element => console.log(element))

console.log('Imprimindo apenas o elemento com seu indice')
gatos.forEach((element, index) => console.log(`${index}: ${element}`))

console.log('Imprimindo elemento, indice e o array completo')
gatos.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
    console.log(array)
})