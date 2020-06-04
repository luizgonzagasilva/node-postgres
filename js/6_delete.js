const db = require('./_database')

async function deleteData(evento_id, participante_id){
    await db.connect()

    const deleteEnvPart = "DELETE FROM evento_participante WHERE evento_id=$1 and participante_id=$2"
    await db.query(deleteEnvPart, [evento_id,participante_id])

    await db.end()

    console.log("removido com sucesso")

}


deleteData(1,1)