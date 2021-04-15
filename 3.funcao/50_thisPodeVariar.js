// Aula feita no console do browser, em 15/04/21 é a aula 70

/* 
Pontos importantes:
1:  this varia de caso em caso, primeiro ele criou uma function console.log(this === windows)
    chamou essa function e deu true
    depois atribuiu essa mesma função ao evento click da pagina, o resultado deu false
    pois o this estava apontando para o body (aonde chamava o evento click)

2:  arrow function não muda valor de this
    ou seja, this sempre apontará para aonde a função foi criada (contexto lexo)
*/