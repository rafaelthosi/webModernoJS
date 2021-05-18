# RESUMO DO MÓDULO

## numeros.js
```
Number.isInteger // verifica se é inteiro
Number(valor) // transforma em Number
variavel.toFixed(2) // formata para duas casas decimais
variavel.toString() // transforma em string
variavel.toString(2) // transforma em binário
```

## math.js
```
Math.PI // retorna valor de PI
Math.pow(n, x) // retorna n elevado a x
```

## string.js
```
variavel.charAt(2) 
variavel.charCodeAt(3) 
variavel.indexOf("d")
variavel.substring(2)
variavel.substring(2, 6)
variavel.replace('S', '*')
'teste'.concat(variavel).concat('!')
'teste' + variavel + '!' 
'Larissa,Rafael,Luna,Donald,Serena'.split(',') 
```

## templateString.js
```
variavel = `Template
String
    Pega todas as quebras de linha
    e aceita variaveis desse jeito: ${variavelTeste}`

variavel.toUpperCase() // converte toda a string para maiusculas
```
## booleanos.js
casos que são false:
- 0
- ''
- null
- NaN
- undefined
- variavel = false

operadores lógicos:
- true || false // retorna true
- true && false // retorna false
- !true // retorna false
- !!true // retorna true
## arrays.js
```
variavel = [0, 1, 2, 3]
variavel[10] = 'teste' // array fica [0, 1, 2, 3, <6 empty items>, 'teste']
variavel.length
variavel.push('valor1', 2)
variavel.pop()
delete variavel[2]
```
## objeto.js
```
variavel = {}
variavel.preco = 13
variavel['valor'] = 13
```
## destructuring3.js
```
Math.random()
Math.floor()
```
#### destructuring4.js
```
Math.ceil()
```
## relacionais.js
```
new Date(0)
variavel.getTime()
```
# unarios.js
```
variavel++
++variavel
```
# Erro.js
```
throw
try catch() finally
```
