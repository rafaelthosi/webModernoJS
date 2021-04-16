// desafio: 
function criaPessoa(nome) {
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p2 = new criaPessoa('Vitor')
p2.falar()


// jeito do professor:
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()