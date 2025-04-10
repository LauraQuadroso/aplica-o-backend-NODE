const { Sequelize } = require('sequelize');

// Substitua pelos seus dados reais
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql', // ou 'postgres', 'sqlite' etc., dependendo do seu banco
  logging: false,
});

module.exports = sequelize;
