const Sequelize = require('sequelize');

const connection = new Sequelize(
  'pet_db', // nome do seu banco de dados
  'root',   // usuário do MySQL
  'Bananinha1997-',       // senha (vazio se for o padrão do XAMPP)
  {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    timezone: '-03:00'
  }
);

module.exports = connection;
