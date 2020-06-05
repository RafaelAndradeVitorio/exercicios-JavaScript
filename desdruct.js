const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        rua:'I',
        numero: 525
    }
}

const {nome, idade} = pessoa // isso faz com que as variaveis possam ser citadas, editas sem precisar chamar o objeto a partir de agr
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // "apelida a variavel para o lado de fora do obj"
console.log(n, i)

const {sobrenome, bemHumorado = 115 } = pessoa // citando variaveis que não entao no obj, tbm é possivel atribuir valores
console.log(sobrenome, bemHumorado)

const {endereco: {rua, numero, cep = 2345333}} = pessoa
console.log(rua, numero, cep)
