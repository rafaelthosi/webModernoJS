function teste1(num) {
    if(num > 7) //sem chaves
        console.log(num)
        console.log('numero foi: ' + num + '. Este é o Final') //este executa fora do if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ';'
        console.log(num)
    }
}

teste2(20)
teste2(30)