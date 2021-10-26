const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(chosenAnimal) {
  if (chosenAnimal === undefined) {
    const animals = {};
    /**
     * Usando o método ForEach(), quando não houverem parâmetros, o objeto animals que está vazio acima, receberá como chave o valor do nome do animal.
     * Utilizando o parametro animal é possivel acessar esse valor e torná-lo a chave.
     * Como valor desta chave foi usado o total de animais dessa espécie, expresso por animal.residents.length
     */
    species.forEach((animal) => { animals[animal.name] = animal.residents.length; });
    return animals;
    /**
     * Foi utilizado o repositório do Dávio Lopes para entender a estrutura da segunda e terceira condição do requisito 5
     * Link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/72
     */
  } const animalsNumber = species.find((animal) => animal.name === chosenAnimal.species);
  if (chosenAnimal.sex === undefined) {
    return animalsNumber.residents.length;
  } return animalsNumber.residents.filter((gen) => gen.sex === chosenAnimal.sex);
}

// console.log(countAnimals({ species: 'lions', sex: 'female' }));

module.exports = countAnimals;
