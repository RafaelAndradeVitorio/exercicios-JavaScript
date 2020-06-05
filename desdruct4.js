function rand([max=0, min=1000]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 100]))
console.log(rand([60]))
console.log(rand([, 900]))
console.log(rand([]))
