// route/routesAnimal.js

const express = require('express');
const router = express.Router();
const Animal = require('../model/Animal');
const Tutor = require('../model/Tutor');

// Rota para cadastrar animal com tutor
router.post('/', async (req, res) => {
    try {
        const {
            nome,
            fotos,
            sexo,
            idade,
            porte,
            cor,
            pelagem,
            descricao,
            temperamento,
            historicoMedico,
            telefone,
            email,
            endereco
        } = req.body;

        // Cria o tutor
        const novoTutor = await Tutor.create({
            nome: nome + ' (Tutor)', // ou você pode passar o nome do tutor separado no front
            telefone,
            email,
            endereco
        });

        // Cria o animal associado ao tutor
        const novoAnimal = await Animal.create({
            nome,
            fotos: fotos[0] || null,
            sexo,
            idade,
            porte,
            cor,
            pelagem,
            descricao,
            temperamento,
            historico_medico: historicoMedico,
            tutor_id: novoTutor.id
        });

        res.status(201).json({ message: 'Animal cadastrado com sucesso!', animal: novoAnimal });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar animal.' });
    }
});

module.exports = router;
