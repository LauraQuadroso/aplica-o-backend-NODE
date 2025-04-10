const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Tutor = connection.define('Tutor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  endereco: DataTypes.STRING
}, {
  tableName: 'Tutor',
  timestamps: false
});

module.exports = Tutor;
