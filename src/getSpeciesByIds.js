const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  data.species.forEach((animal) => {
    if (animal.id === ids) animals.push(animal);
  });
  return animals;
}

module.exports = getSpeciesByIds;
