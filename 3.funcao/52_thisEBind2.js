// com bind
function Pessoa() {
    this.idade = 0

    setInterval(function() { //função setInterval dispara outra função em determinado intervalo
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //1000 milisegundos
}

// this armazenado em variavel
function Pessoa2() {
    this.idade = 0
    const self = this
    setInterval(function() { //função setInterval dispara outra função em determinado intervalo
        self.idade++
        console.log(self.idade)
    }, 1000) //1000 milisegundos
}

Pessoa()
Pessoa2()

