// DESAFIO: Criar o metodo forEach2, ele precisa fazer o mesmo que um forEach
// Minha versão:

// NÃO FUNCIONANDO! NÃO CONSEGUI
// NÃO FUNCIONANDO! NÃO CONSEGUI
// NÃO FUNCIONANDO! NÃO CONSEGUI

// const gatos = ['luna', 'donald', 'lika']

// Object.setPrototypeOf(gatos, {index: 0, array: gatos, element: gatos[0], forEach2() {
//     (function(condicao) {
//         for(gatos.index; gatos.index < gatos.array.length; gatos.index++) {
//             gatos.element = gatos.array[index]
//             if (!!condicao) {
//                 condicao
//             }
//         }
//     })()
// }})

// gatos.forEach2((gatos.element) => console.log(gatos.element))

// Versão do professor:

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) { // this aponta para o array que está chamando o método
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(element, index) {console.log(index, element)})

// Eu testando depois de ver a aula:

// Arrow não funciona!
// Array.prototype.forEach3 = callback => {
//     for (let index = 0; index < this.length; index++) {
//         callback(this[i], i, this)
//     }
// }

// aprovados.forEach3((teste) => console.log(teste))

Array.prototype.teste = function(teste, funcao) {
    console.log(teste)

    // chama a funcao passada por param
    funcao('test') // com o param test
}

aprovados.teste('abcd', function(teste1) { console.log(teste1)})