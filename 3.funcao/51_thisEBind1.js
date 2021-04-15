const pessoa = {
    saudacao: 'Bom dia!',
    falar() { //recurso es2015
        console.log(this.saudacao) //this aponta para pessoa
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind(pessoa) vai fazer com que sempre o this aponte para pessoa
falarDePessoa()