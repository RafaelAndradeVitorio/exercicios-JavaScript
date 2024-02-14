const moduloA = require('../../moduloA')
const moduloB = require('../../moduloB')
const c = require("index.js")

console.log(moduloA.ola)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end
}).listen(4747)