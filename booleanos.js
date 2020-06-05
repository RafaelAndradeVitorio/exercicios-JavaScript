let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!! (isAtivo = true))

console.log("Os falsos...")
console.log(!!"")
console.log(!!0)
console.log(!!undefined)
console.log(!!null)
console.log(!!NaN)

console.log("Pra finalizar...")
console.log(!!('' || 0 || " "))

let nome = ''
console.log(nome || "desconhecido")
