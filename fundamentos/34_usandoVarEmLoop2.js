const funcs = [] //array(vetor)

for (var i = 0; i < 10; i++) {
    funcs.push(function() { //push adiciona um valor ao array, neste caso estamos adicionando uma função sem nome
        console.log(i)
    })
}

funcs[2]() //chamando o elemento 2 do array, que é uma função(por isso o '()')
funcs[8]()
//por ser var, o resultado sempre será o ultimo declarado(10)