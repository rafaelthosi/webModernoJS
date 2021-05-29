class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // protótipo de Pai vira Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chama o prototipo de Pai(Avo)
        this.profissao = profissao
    }
}

class Filho extends Pai { // protótipo de Filho vira Pai
    constructor() {
        super('Thosi') // chama o prototipo de Filho(Pai)
    }
}

const filho = new Filho
console.log(filho)

const pai = new Pai
console.log(pai)

const avo = new Avo('teste')
console.log(avo)