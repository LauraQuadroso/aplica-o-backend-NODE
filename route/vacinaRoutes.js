const express = require('express');
const router = express.Router();
const Vacina = require('../model/Vacina');
const AnimalVacina = require('../model/AnimalVacina');

// Cadastrar nova vacina
router.post('/cadastro', async (req, res) => {
  try {
    const novaVacina = await Vacina.create(req.body);
    res.status(201).json({ message: 'Vacina cadastrada com sucesso!', data: novaVacina });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar vacina.' });
  }
});

// Listar vacinas
router.get('/', async (req, res) => {
  try {
    const vacinas = await Vacina.findAll();
    res.status(200).json(vacinas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vacinas.' });
  }
});

// Associar vacina a um animal
router.post('/aplicar', async (req, res) => {
  try {
    const { animal_id, vacina_id, data_aplicacao } = req.body;

    const aplicacao = await AnimalVacina.create({
      animal_id,
      vacina_id,
      data_aplicacao
    });

    res.status(201).json({ message: 'Vacina aplicada com sucesso!', data: aplicacao });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao aplicar vacina.' });
  }
});

module.exports = router;
