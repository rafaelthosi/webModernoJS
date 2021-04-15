let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // objeto global no node, no browser seria "window"
comparaComThis(this) //this nesse momento apontando para o modulo atual, enquanto da function está para obj global

console.log('-- exemplo com .bind(obj) --')
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('-- exemplo arrow --')
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log('-- arrow x bind --')
comparaComThisArrow = comparaComThisArrow.bind(obj) // no caso de arrow function, o bind é ignorado. This de uma arrow tem o contexto de onde foi criado (contexto lexo)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)