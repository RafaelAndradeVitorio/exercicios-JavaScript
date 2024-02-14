console.log(module.exports === true)
console.log(exports === module.exports)

this.a = "olá"
exports.b = "Boa tarde"
module.exports.c = "Bom dia"

console.log(module.exports)