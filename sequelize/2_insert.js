const models = require('./models')

async function insert(){
    // eventos
    const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs'})
    const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgressql'})

    // participantes
    const carlos = await models.participante.create({nome: 'Carlos'})
    const augusto = await models.participante.create({nome: 'Augusto'})
    const janaina = await models.participante.create({nome: 'Janaína'})
    const rafael = await models.participante.create({nome: 'Rafael'})

    // participantes em eventos
    await eventoNode.setParticipantes([carlos, augusto, janaina])
    await eventoPostgres.setParticipantes([janaina, rafael])

    await models.sequelize.close()

    console.log("dados inseridos")
}

insert()