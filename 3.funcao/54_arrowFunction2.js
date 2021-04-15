// mesmo exemplo do arquivo 52_thisEBind2.js

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // note que não foi usado bind nem uma variavel para armazenar this, por o this dentro da arrow não mudar de valor
}

new Pessoa