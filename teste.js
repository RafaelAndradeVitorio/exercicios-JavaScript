
function acontece (array, numero){
   var quantidade = 0
   for(atraso=0; atraso < array.length;atraso++){
       if (array[atraso]<=0){
           quantidade = quantidade + 1
       } else{ 
           quantidade = quantidade
       }
   }

   if (quantidade >= numero){
       return true
   } else{
       return false
   }
}

function aberturas(alunoDia, minimo){
   var resultado = []
  

   for  (i = 0; i<alunoDia.length; i++){
       
       if (acontece(alunoDia.indexOf([i]), minimo)== true){
           alunoDia.indexOf([i]) = true
       } else {
           alunoDia.indexOf([i]) = false
  } 
          return alunoDia
   }
}

console.log(aberturas([[0, -9, 2, 5], [7, 8, 9, 10], [5, 7, -9, -9] ], 2))
 

/*function acontece (array, numero){
   var quantidade = 0
   for(atraso=0; atraso < array.length;atraso++){
       if (array[atraso]<=0){
           quantidade = quantidade + 1
       } else{ 
           quantidade = quantidade
       }
   }

   if (quantidade >= numero){
       return true
   } else{
       return false
   }
}

var alunosDaSegunda = [10, -5, 3, 0]
var alunosDaTerca =[5, 8, 9, 6]
var alunosDaQuarta= [8, 9, -6, -5]

function aberturas(alunoDia, minimo){
   var resultado = []
  

   for  (i = 0; i<alunoDia.length; i++){
       
       if (acontece(alunosDaSegunda, minimo)== true){
           resultado.push(true)
       } else {
            resultado.push(false)
       } if (acontece(alunosDaTerca, minimo)== true){
         resultado.push(true)
     } else {
          resultado.push(false)
     } if (acontece(alunosDaQuarta, minimo)== true){
      resultado.push(true)
     } else {
       resultado.push(false)
  } 
          return resultado
   }
}

console.log(aberturas([alunosDaSegunda, alunosDaTerca,alunosDaQuarta], 2))*/

