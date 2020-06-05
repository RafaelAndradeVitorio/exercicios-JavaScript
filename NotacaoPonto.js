console.log(Math.ceil)

obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function obj (nome) {
     this.nome= nome
    }

const obj = new obj ('cadeira')