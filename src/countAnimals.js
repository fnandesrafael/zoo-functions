const data = require('../data/zoo_data');

/**
 * Para a resolução desse requisito, foram consultádos os repositórios dos alunos:
 * Gabriel Matos, Link: https://github.com/tryber/sd-016-b-project-zoo-functions/pull/123
 * Dávio Lopes, Link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/72
 */

function countAnimals(chosenAnimal) {
  const animals = {};
  // Nessa primeira parte, se o parâmetro for indefinido, a função deverá retornar um objeto com o nome de todas as espécies do zoológico como chave e sua quantidade de residẽntes como valor.
  if (chosenAnimal === undefined) {
    data.species.forEach((animal) => {
      animals[animal.name] = animal.residents.length;
    });
    return animals;
  }
  // Caso o parâmetro passado seja definido, a função deverá retornar a espécie que primeiro condiz com o parâmetro pelo método find() e a quantidade de residentes dessa mesma espécie.
  const findAnimal = data.species.find((animal) => animal.species === chosenAnimal.name);
  if (chosenAnimal.sex === undefined) {
    return findAnimal.residents.length;
  }
  // Se for especificado o gênero da espécie, então será retornado somente a quantidade de animais da respectiva espécie e que possua o mesmo gênero.
  const sameSex = findAnimal.residents.filter((animal) => animal.sex === chosenAnimal.sex).length;
  return sameSex;
}

console.log(countAnimals());

module.exports = countAnimals;
