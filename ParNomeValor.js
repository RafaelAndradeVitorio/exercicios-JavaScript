// par nome/valor

const saudacao = 'Opa' // contexto Léxico ( alocado fisicamente)

function exec(){
    const saudacao = 'faala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pare nome/valor

const cliente = {
  nome: 'Pedro',
  idade: '22',
  endereco: {
      rua: 'irere',
      numero: 22
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)