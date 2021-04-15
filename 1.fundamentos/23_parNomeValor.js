// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Faala' // contexto léxico 2
    return saudacao
}

console.log(saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 23,
    peso: 57,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(Cliente)