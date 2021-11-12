const data = require('../data/zoo_data');

/**
 * Foi usado como referência para a resolução desse requesito o repositório da aluna Alissandra.
 * Link: https://github.com/tryber/sd-016-b-project-zoo-functions/pull/103
 * Também foi usado a documentação dos métodos some(), includes() e toString().
 * Link some(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * Link includes(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * Link toString(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
 */

// A arrow function inputUndefined é responsável por realizar o procedimento de estruturação de um objeto padrão caso nenhum valor seja passado, ou que ao menos esse valor seja indefinido.
const inputUndefined = () => data.employees.map((obj) => (
  {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    // Na linha 9 é mapeado o nome de todas as que espécies que: pelo método map() possuirem o mesmo id que foi passado pelo obj.responsibleFor.
    species: obj.responsibleFor.map((id) => data.species.find((animal) => animal.id === id).name),
    // Na linha 11 acontece algo semelhante, contudo é mapeado a localização de todas as espécies que possuirem o id igual ao obj.responsibleFor.
    locations: obj.responsibleFor.map((id) => data.species
      .find((animal) => animal.id === id).location),

  }
));

// Na arrow function getSearch a função inputUndefined é chamada e retorna um objeto que condiz com as informações passadas no parâmetro, sendo elas o obj.fullName ou o obj.id.
const getSearch = (search) => {
  const newSearch = inputUndefined();
  return newSearch.find((obj) => obj.fullName.includes(search) || obj.id === search);
};

function getEmployeesCoverage(employee) {
  // Quando o parâmetro passado é indefinido, o retorno é dado pela arrow function inputUndefined.
  if (employee === undefined) {
    return inputUndefined();
  }
  // Na linha 29 é atribuido à constante search os valores passados como parâmetros em formato de string, para que sejam condicionados pela constante verify que aparece logo em seguida na linha 30.
  const search = Object.values(employee).toString();
  const verify = data.employees
    .some((cond) => search === cond.firstName || search === cond.lastName || search === cond.id);
  // Caso alguma das condições do método some() sejam satisfeitas, e a const search passar em algum de seus tests, a arrow function getSearch(linha 18) é retornada e possui por parâmetro os valores obtidos em search com Object.values.
  if (verify) {
    return getSearch(search);
  }
  // Caso nada seja satisfeito, é retornado o erro 'Informações Inválidas'.
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
