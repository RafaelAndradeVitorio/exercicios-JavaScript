// Nesta função retornara o produto de todos os  elementos dentro  do ARRAY

function produto (numero){
    var total = 1
    for (var i=0; i<numero.length;i++){
      total = total * numero[i]
    }
    return total

}
