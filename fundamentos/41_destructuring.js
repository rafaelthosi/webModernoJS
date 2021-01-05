const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        teste: {
            cor: 'vermelho'
        }
    }
}
//destructuring pode ser usado com {}(em caso de objeto) ou [](em caso de array)
const {nome, idade} = pessoa //aqui declaramos uma variavel nome e outra variavel idade, pegando do objeto pessoa
console.log(nome, idade) //note que não foi preciso acessar com ponto(Ex: pessoa.nome, pessoa.idade), pois se tornaram variaveis
console.log(pessoa) //os atributos continuam no objeto

const {nome: n, idade: i} = pessoa //aqui é o mesmo efeito, mas colocamos nomes diferentes nas variaveis('n' e 'i')
console.log(n, i)

//tentando usar com atributos que não existem no objeto:
const {ourinhos, ipaussu = 'predefinido'} = pessoa //nenhuma das duas existem, porém pra 'ipaussu' coloquei um valor padrão, que vai entrar em ação apenas se não achar nenhum valor(undefined)
console.log(ourinhos, ipaussu)

//pegando valores dentro do objeto que está no objeto(endereco):
const {endereco: { logradouro, numero, cep: a}} = pessoa //note que 'cep' não existe no objeto
console.log(logradouro, numero, a)

//pegando valores do objeto dentro de outro objeto dentro de outro objeto(teste)
const {endereco: {teste: {cor: testado}}} = pessoa
console.log(testado)