 function escada(numeroDeDegraus) {

   var degrausDaEscada = [];
  
   //var comparacao = numeroDeDegraus;
  
   for (let i = 1; i <= numeroDeDegraus; i++) {
  
     var degraus = " ".repeat(numeroDeDegraus-i)+"#".repeat(i);
  
    degrausDaEscada.push(degraus);
    
  
   };
  
   return degrausDaEscada;
  
  };

console.log(escada(5))




