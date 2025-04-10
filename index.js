const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/database');

require('./database/associations');

const animalRoutes = require('./route/routesAnimal');

const tutorRoutes = require('./route/tutorRoutes');
const vacinaRoutes = require('./route/vacinaRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/animais', animalRoutes);
app.use('/api/tutores', tutorRoutes);
app.use('/api/vacinas', vacinaRoutes);

connection.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
    app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco:', err);
  });
