const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) // transforma em json

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) Erro
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Erro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transforma um json em objeto
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // transforma um json em objeto
const teste = JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')