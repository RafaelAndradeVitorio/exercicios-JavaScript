console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function teste (){
    console.log(this === exports)
    console.log(this ==- global)
}

