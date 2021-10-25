const data = require('../data/zoo_data');

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// Foi usado de referencia para a utilização de indefinidos parametros a Sintaxe Rest Parameters
function getSpeciesByIds(...chosenAnimal) {
  const animalsArray = [];
  data.species.forEach((animalElement) => {
    if (animalElement.id === chosenAnimal) animalsArray.push(animalElement);
  });
  return animalsArray;
}

module.exports = getSpeciesByIds;
