const data = require('../data/zoo_data');

/**
 * Usei como referencia para a utilização de um numero indefinido de parametros a Sintaxe Rest Parameters
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */

function getSpeciesByIds(...chosenAnimal) {
  const animalsArray = [];
  data.species.forEach((animalElement) => {
    for (let i = 0; i < chosenAnimal.length; i += 1) {
      if (animalElement.id === chosenAnimal[i]) animalsArray.push(animalElement);
    }
  });
  return animalsArray;
}

module.exports = getSpeciesByIds;
