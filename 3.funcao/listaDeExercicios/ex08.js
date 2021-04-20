// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function leJogos(listaStr) {
    const lista = listaStr.split(" ")

    // converte strings dentro de array em Number
    lista.forEach((str, i) => {
        lista[i] = Number(str)
    })

    let contadorRecorde = 0, melhorJogo = lista[0], piorJogo = lista[0], numPiorJogo = 1

    for (index in lista) {
        if (index == 0) { continue }

        if (melhorJogo < lista[index]) { 
            melhorJogo = lista[index]
            contadorRecorde++
        }

        if (lista[index] < piorJogo) {
            piorJogo = lista[index]
            numPiorJogo = Number(index) + 1
        }
    }

    return [contadorRecorde, numPiorJogo]
}

console.log(leJogos("10 20 20 8 25 3 0 30 1"))