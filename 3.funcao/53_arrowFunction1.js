// função normal
let dobro = function (a) {
    return a * 2
}

// arrow
dobro = (a) => {
    return a * 2
}  // ou
dobro = a => a * 2 //'return' fica implicito; quando se tem apenas um param não é preciso o uso de ()

console.log(dobro(Math.PI)) // dobro de PI

let ola = function() {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' // para representar falta de parametro (porém, _ é um parametro). () é a forma padrão

console.log(ola())