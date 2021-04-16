const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // função carrega com sim o contexto aonde foi criada, por isso não importa aonde for chamada, ela olhará para cá
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()