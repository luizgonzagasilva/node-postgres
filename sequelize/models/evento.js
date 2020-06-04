const Sequelize = require('sequelize')
const db = require('../_database')

const Evento = db.define('evento',{
    nome: {
        type: Sequelize.STRING
    },
})

module.exports = Evento

const Participante = require('./participante')
Evento.belongsToMany(Participante, {through: 'evento_participante'});