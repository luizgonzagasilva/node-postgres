
const db = require('./_database')

async function updateData(id, nome){
    await db.connect()

    const updateParticipante = "UPDATE participante SET nome=$1 WHERE id=$2"
    await db.query(updateParticipante, [nome, id])

    db.end()

    console.log("alterado com sucesso")
}

updateData(1, "Carlos Augusto")