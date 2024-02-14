const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios =require("axios")

const chines = f => f.pais ==='China'
const salario1 = f => f.salario === 22895.45
const mulher = f => f.genero ==="F"
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)


    const funcMCM = funcionarios
    .filter(chines)
    .filter(mulher)
    .reduce(menorSalario)

    console.log(` Chinesa com menor salario: ${JSON.stringify(funcMCM)}`)
})