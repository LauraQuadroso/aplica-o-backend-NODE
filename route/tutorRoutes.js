const express = require('express');
const router = express.Router();
const Tutor = require('../model/Tutor');

// Cadastrar um tutor
router.post('/cadastro', async (req, res) => {
  try {
    const novoTutor = await Tutor.create(req.body);
    res.status(201).json({ message: 'Tutor cadastrado com sucesso!', data: novoTutor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar tutor.' });
  }
});

// Listar todos os tutores
router.get('/', async (req, res) => {
  try {
    const tutores = await Tutor.findAll();
    res.status(200).json(tutores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tutores.' });
  }
});

module.exports = router;
