const db = require('../_database')

const models = {
    evento: require('./evento'),
    participante: require('./participante'),
    sequelize: db
}

module.exports = models