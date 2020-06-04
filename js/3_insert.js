
const db = require('./_database')

async function insertData(){
    await db.connect()

    // cria eventos
    const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"

    await db.query(queryEvento, ['Encontro de Nodejs'])
    await db.query(queryEvento, ['Encontro de Postgresql'])

    // cria participantes
    const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"

    await db.query(queryParticipante, ['Carlos'])
    await db.query(queryParticipante, ['Augusto'])
    await db.query(queryParticipante, ['Janaína'])
    await db.query(queryParticipante, ['Rafael'])

    // adiciona participantes ao evento NodeJS

    const queryEventoParticipante = "INSERT INTO evento_participante (evento_id, participante_id) VALUES ($1, $2)"

    await db.query(queryEventoParticipante, [1, 1])
    await db.query(queryEventoParticipante, [1, 2])
    await db.query(queryEventoParticipante, [1, 3])

    // adiciona participantes ao evento NodeJS
    await db.query(queryEventoParticipante, [2, 3])
    await db.query(queryEventoParticipante, [2, 4])

    await db.end()

    console.log("dados inseridos")

}

insertData()