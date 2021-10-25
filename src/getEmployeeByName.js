const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  /**
   * Condição que verifica se o nome colocado como parametro é válido, caso seja vazio deve retornar um objeto vazio
   */

  /**
  * Consultei o Repositório da Tatiana Bezerra para resolver o retorno caso não seja recebido nenhum parametro
  * Link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/130
  */

  if (!employeeName) {
    return {};
  }
  /**
   * Retorno caso o parametro passado pelo usuario seja condizente com o primeiro ou último nome de algum funcionario na base de dados
   */
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
