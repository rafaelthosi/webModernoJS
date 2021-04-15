const funcs = [] //array(vetor)

for (let i = 0; i < 10; i++) {
    funcs.push(function() { //push adiciona um valor ao array, neste caso estamos adicionando uma função sem nome
        console.log(i)
    })
}

funcs[2]() //chamando o elemento 2 do array, que é uma função(por isso o '()')
funcs[8]()
