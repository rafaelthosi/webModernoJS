imprimeResult = nota => {
    function teste(nota) {
        console.log("alo")
    }
    teste(nota)
    
    if (nota >= 6) {
        console.log("aprovado")
    } else if (nota < 6) {
        console.log("reprovado")
    } else {
        console.log("Insira Números por favor")
    }
}

imprimeResult(5)