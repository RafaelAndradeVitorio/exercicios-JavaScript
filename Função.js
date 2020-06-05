// Função sem retorno

function imprimirSoma (a, b) {
    console.log(a + b);
}

imprimirSoma (2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 4, 4, 3)
imprimirSoma()

// Função que retorna

function soma(a = 1, b = 1){ //  <-- atribuiu valor inicial para a e b
return(a + b)
}

console.log(soma(2, 9))
console.log(soma(2))   // como tanto a como b tiveram "1" como valor inicial, b automatcamente vale 1 mesmo sem uma atribuição nessa linha


