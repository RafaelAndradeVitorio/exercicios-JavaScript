const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.codePointAt(3))  // Traduz para tabela unicode
console.log(escola.indexOf('3')) // Descobrir qual indice corresponde a esse caracter
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat(" !"))
console.log('Escola ' + escola + " !")
console.log(escola.replace(3, 'e')) // Substituir caractere
console.log('Ana,Maria,Pedro'.split(","))