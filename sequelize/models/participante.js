const Sequelize = require('sequelize')
const db = require('../_database')

const Participante = db.define('participante',{
    nome: {
        type: Sequelize.STRING
    },
})

module.exports = Participante

const Evento = require('./evento')
Participante.belongsToMany(Evento, {through: 'evento_participante'})