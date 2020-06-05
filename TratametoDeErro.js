function tratarErroeLancar(erro){
    throw new Error ('...')
}
 function ImprimirNomeGreitado(obj) {
     try { 
         console.log(obj.name.toUpperCase() + '!!!')
     } catch(e) {
         tratarErroeLancar(e)
     }
 }

 const obj = {nome : 'Roberto'}
 ImprimirNomeGreitado(obj)
