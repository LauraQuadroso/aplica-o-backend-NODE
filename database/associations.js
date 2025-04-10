const Animal = require('../model/Animal');
const Tutor = require('../model/Tutor');
const Vacina = require('../model/Vacina');
const AnimalVacina = require('../model/AnimalVacina');

// Relacionamento: Animal → Tutor
Animal.belongsTo(Tutor, { foreignKey: 'tutor_id' });
Tutor.hasMany(Animal, { foreignKey: 'tutor_id' });

// Relacionamento: Animal ↔ Vacina (tabela intermediária Animal_Vacina)
Animal.belongsToMany(Vacina, {
  through: AnimalVacina,
  foreignKey: 'animal_id',
  otherKey: 'vacina_id'
});

Vacina.belongsToMany(Animal, {
  through: AnimalVacina,
  foreignKey: 'vacina_id',
  otherKey: 'animal_id'
});

module.exports = {
  Animal,
  Tutor,
  Vacina,
  AnimalVacina
};
