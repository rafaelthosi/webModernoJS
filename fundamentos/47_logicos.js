function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log('1.', compras(true, true))
console.log('2.', compras(true, false))
console.log('3.', compras(false, true))
console.log('4.', compras(false, false))