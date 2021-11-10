const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Encontra a primeira espécie gerenciada pelo funcionário que tiver o mesmo id que foi passado no parâmetro.
  const findSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  // Retorna um array com o nome, sexo e idade dos animal da respectiva espécie.
  const findAnimal = data.species.find((animal) => animal.id === findSpecie).residents
  // Com o método sort(), são ordenados todos os residêntes por ordem de idade.
    .sort((a, b) => b.age - a.age);
  // Por fim é retornado um array com o animal mais velho
  return Object.values(findAnimal[0]);
}

// console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
