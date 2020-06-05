/* v xor v = f
   v xor f = v     
   f xor v = v
   f xor f = f
*/

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) // "^" sinal xor "ou exclusivo"
    const comprarTv32 = trabalho1 != trabalho2
    const vidaSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTv32, comprarTv50, vidaSaudavel}
}

console.log(compras(true, true))
