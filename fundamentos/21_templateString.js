const nome = 'Larissa'
const concatenacao = 'Olá ' + nome + '!'
const templateString = `.
    Olá
        ${nome}!`

console.log(concatenacao)
console.log(templateString)
console.log(`Testando a template    string.
Nome: ${nome}
quebra de linha sem \\n`)
    // aspas duplas de simples não tem diferença, agora o crase é uma templateString
console.log(`1 + 1 = ${1 + 1}`)

const up = txtThosi => txtThosi.toUpperCase() //não importa muito saber como isso funciona agora, o que importa é que isso é uma função
console.log(`Ei... ${up('cuidado!')}`) //templateString também aceita funções, no caso essa faz o texto ficar em maisculas