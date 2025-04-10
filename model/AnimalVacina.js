const { DataTypes } = require('sequelize');
const connection = require('../database/connection');
const Animal = require('./Animal');
const Vacina = require('./Vacina');

const AnimalVacina = connection.define('Animal_Vacina', {
  animal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Animal,
      key: 'id'
    }
  },
  vacina_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Vacina,
      key: 'id'
    }
  },
  data_aplicacao: DataTypes.DATE
}, {
  tableName: 'Animal_Vacina',
  timestamps: false
});

module.exports = AnimalVacina;
