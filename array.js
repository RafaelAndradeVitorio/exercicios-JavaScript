const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)

console.log(valores.length) // conta quantos elementos tem no array
console.log(valores.push({id: 3}, null, 'teste', 0)) // adiciona valores
console.log(valores)

console.log(valores.pop()) // retorna e tira o ultimo valor do array
console.log(valores)
delete valores [0] // deleta o valor selecionado
console.log(valores)
console.log(typeof valores)
