const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 2', ()=>{
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(()=>{
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, ()=>{
    console.log('Executando Tarefa!', new Date().getSeconds)
})