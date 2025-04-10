const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Animal = connection.define('Animal', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: DataTypes.TEXT,
  sexo: DataTypes.STRING,
  idade: DataTypes.STRING,
  porte: DataTypes.STRING,
  cor: DataTypes.STRING,
  pelagem: DataTypes.STRING,
  temperamento: DataTypes.STRING,
  fotos: DataTypes.STRING,
  historico_medico: DataTypes.TEXT,
  tutor_id: DataTypes.INTEGER
}, {
  tableName: 'Animal',
  timestamps: false
});

module.exports = Animal;
