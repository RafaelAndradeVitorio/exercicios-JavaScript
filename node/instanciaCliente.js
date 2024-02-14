const instanciaA = require('./instanciaUnica')
const instanciaB = require('./instanciaUnica')

const instanciaC = require('./instanciaNova')()
const instanciaD = require('./instanciaNova')()

instanciaA.inc()
instanciaA.inc()

console.log(instanciaB.valor, instanciaA.valor)

instanciaC.inc()
instanciaC.inc()

console.log(instanciaD.valor, instanciaC.valor)