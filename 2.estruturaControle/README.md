# RESUMO DO MÓDULO

## ifElseIf.js
Primeiro apresentação ao prototype (será explicado no módulo de objeto)

## switch.js
```
Math.floor(3.5) // retorna 3 (arredonda para baixo)
Math.ceil(3.5) // retorna 4 (arredonda para cima)
```

## doWhile.js
```
Math.random() * (max - min) + min // gera um número aleatorio dentro do intervalo escolhido
```

## for2.js
```
for (let index in array)
for (let atributo in objeto)
```

## breakContinue.js
```
for (index in variavel) {
    if (condicao) break // faz o for parar
    if (condicao2) continue // pula a proxima repetição, indo para a próxima
}

externo: for (let index in array) { // rotulando este for com 'externo'
    for (let index2 in array2) {
        if (condicao) break externo // para o for rotulado com externo
    }
}
```