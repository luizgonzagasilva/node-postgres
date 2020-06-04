
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'gerencial@123',
    dialect: 'postgres',
    port: 15432,
    logging: true
});

module.exports = sequelize

// teste de conexão com o db
async function test(){
    try {
        let result = await sequelize.authenticate()
        console.log("conexão realizada com sucesso")
    } catch(error){
        console.log("houve erro ao tentar conectar no banco de dados:")
        console.log(error)
        process.exit()
    }
}

test()