const { Animal, Tutor } = require('../models');

const createAnimal = async (req, res) => {
    try {
        const {
            nome,
            descricao,
            sexo,
            idade,
            porte,
            cor,
            pelagem,
            temperamento,
            fotos,
            historicoMedico,
            telefone,
            email,
            endereco,
        } = req.body;

        // Cria o tutor (ou poderia verificar se já existe pelo email, por exemplo)
        const tutor = await Tutor.create({ nome: 'Tutor', telefone, email, endereco });

        // Cria o animal com o tutor_id vinculado
        const animal = await Animal.create({
            nome,
            descricao,
            sexo,
            idade,
            porte,
            cor,
            pelagem,
            temperamento,
            fotos,
            historico_medico: historicoMedico,
            tutor_id: tutor.id,
        });

        res.status(201).json({ message: 'Animal cadastrado com sucesso!', animal });
    } catch (error) {
        console.error('Erro ao cadastrar animal:', error);
        res.status(500).json({ message: 'Erro ao cadastrar animal.' });
    }
};

module.exports = {
    createAnimal,
};
