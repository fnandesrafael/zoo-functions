const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(memberId) {
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   * Foi utilizado na função isManager o método some() que testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
   */
  return employees.some((employee) => employee.managers.find((manager) => manager === memberId));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
  /**
   * Caso o retorno da primeira função seja positivo, a função getRelatedEmployees deve retornar um array contendo exatamente todos os membros que são gerenciados pelo gerenteEscolhido.
   * Nesse caso o método filter() pega cada membro e encontra o valor do manager
   * Após é usado o método find() compara se esse valor é igual ao parametro passado(managerID)
   * Por fim caso seja igual, o método map() seleciona esses funcionários que possuem o mesmo gerente e então são concatenados em um Templeta Literal formado pelo primeiro e ultimo nome do funcionario
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   */
    return employees.filter((member) => member.managers.find((manager) => manager === managerId))
      .map((member) => `${member.firstName} ${member.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
