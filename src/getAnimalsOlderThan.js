const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/**
 * Referência utilizada para o método find() e every()
 * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

function getAnimalsOlderThan(animal, age) {
  /**
   * Constante que guarda todos os animais que possuirem o mesmo nome de espécie que foi inserido no parametro 'animal'
   */
  const animalsByName = species.find((chosenAnimal) => chosenAnimal.name === animal);
  /**
   * Constante que recebe os animais previamente filtrados pela constante animalsByName e aplica um novo filtro baseado na idade dos animais residentes comparadas à idade escolhida no parametro
   */
  const agedAnimals = animalsByName.residents.every((residentAnimal) => residentAnimal.age >= age);
  /**
   * Retorna verdadeiro se os animais escolhidos possuirem uma idade minima compativel com a idade escolhida no parametro, e falso caso contrário
   */
  return agedAnimals;
}

module.exports = getAnimalsOlderThan;
