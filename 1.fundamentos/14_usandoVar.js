//escopos de var: função e global
{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera) //console.log dentro do bloco da declaração da variavel
            }
        }
    }
}

console.log(sera) //console.log fora do bloco de declaração da variavel, na maioria das linguagens a variavel ficaria visivel apenas dentro do bloco dela, ou seja, isso daria erro

// Porém, se uma variavel var for declarada dentro de um função, ela ficará visivel apenas no bloco da função, exemplo:
function teste() {
    var local = 123
    console.log(local) //aqui sem problemas, está dentro do bloco
}

teste() //chamando a função
//console.log(local) //aqui retorna erro

// Resumindo: var tem apenas dois escopos possíveis, ou a variavel é global(pode ser acessada de qualquer lugar) ou está dentro de uma função