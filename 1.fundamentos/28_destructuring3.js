function rand({ min = 0, max = 1000 }) { //passando um destruc como parametro, faz ter aquela variavel dentro da função, sem passar como destruc teriamos que ficar acessando com ponto(Ex: obj.min, obj.max)
    //não sei explicar então vou comentar exemplos que pensei
    //const valor = Math.random() //esse retorna 0, então a função sozinha faz nada
    //const valor = Math.random() * 14  //esse retorna numeros até 14, aleatoriamente
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor arrendonda para baixo
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //pode tanto receber uma variavel que armazena um objeto
console.log(rand({ max: 500, min: 400 })) //quanto receber um objeto diretamente
console.log(rand({})) //como colocamos valores predefinidos no destruc, o numero aleatorio será entre 0 a 1000