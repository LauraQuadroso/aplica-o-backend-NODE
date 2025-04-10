const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Vacina = connection.define('Vacina', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Vacina',
  timestamps: false
});

module.exports = Vacina;
