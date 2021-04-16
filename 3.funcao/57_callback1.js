const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento de fabricantes ele executa a função, passando como primeiro param o elemnto e segundo o indice
fabricantes.forEach(a => console.log(`${a}`)) // como a função possui apenas um parametro, ele passa somente o elemnto