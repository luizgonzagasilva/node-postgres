const models = require('./models')

async function select(){
    console.log("\n")
    //eventos
    const eventos = await models.evento.findAll()
    eventos.forEach((evento) => {
        console.log("evento: ", evento.nome)
        
    })
    console.log("\n")

    // participantes
    const participantes = await models.participante.findAll()
    participantes.forEach((participante) => {
        console.log("participante: ", participante.nome)
    })
    console.log("\n")

    // participantes em eventos
    const eventosComParticipantes = await models.evento.findAll({
        include: [
            {
                model: models.participante
            }
        ]
    })
    eventosComParticipantes.forEach((evento) => {
        console.log("evento: ", evento.nome)
        evento.participantes.forEach((participante) => {
            console.log("----------> participante: ", participante.nome)
        })
    })
    console.log("\n")

    await models.sequelize.close()
}

select()