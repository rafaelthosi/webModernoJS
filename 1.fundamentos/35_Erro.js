function tratarErroeLançar(erro) {
    // throw new Error('...')
    // throw 10
    // true
    // 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroeLançar(e)
    } finally {
        console.log('Final.')
    }
}

const obj = { name: 'Rafael'}
// const objErrado = { nyme: 'Larissa'}
imprimirNomeGritado(obj)
// imprimirNomeGritado(objErrado)