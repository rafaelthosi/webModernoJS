const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(Param) { 
        if (Param > this._valor) {
            this._valor = Param
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // puxando get
sequencia.valor = 1000 // puxando set
console.log(sequencia.valor, sequencia.valor) // puxando get
sequencia.valor = 900 // puxando set
console.log(sequencia.valor, sequencia.valor) // puxando get