const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Pull 101, 126
/**
 * Foi usado como referência para resolução desse requisito, o repositório da aluna Mariana Saraiva.
 * Link: https://github.com/tryber/sd-016-b-project-zoo-functions/pull/101
 * Também foi usado a documentação do método reduce()
 * Link reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

// Essa constante recebe os valores de hours do arquivo zoo_data.
const allDays = Object.keys(hours);

// A arrow function zooInfo será responsável por criar o objeto geral de informações sobre os horários do zoológico.
const zooInfo = () => {
  // A método recude, rece por parâmetro um acc e um elem, sendo o acc o acumulador que vai receber o retorno do que for gerado na mesma.
  const obj = allDays.reduce((acc, item) => {
    acc[item] = {
      officeHour: `Open from ${hours[item].open}am until ${hours[item].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(item))
        .map((newAnimal) => newAnimal.name),
    };
    return acc;
  }, {});
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  // Verifica se o parâmetro scheduleTarget é indefinido, em caso positivo é retornado a arrow function zooInfo com o objeto geral.
  if (scheduleTarget === undefined) {
    return zooInfo();
  }
  // Estrutura de verificação atribuida à uma constante pelo método some semelhante ao requisito getEmployeesCoverage
  const verify = species.some((cond) => scheduleTarget === cond.name);
  // É retornado novamente a arrow function zooInfo na linha 42 quando nenhum dos parâmetros condizerem com o que se espera da verificação.
  if (!verify && !allDays.includes(scheduleTarget)) {
    return zooInfo();
  }
  if (allDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: zooInfo()[scheduleTarget] };
  }
  // Retorna os períodos em que o animal estará disponível caso este seja passado como parâmetro no scheduleTarget.
  return species.find((animal) => animal.name === scheduleTarget).availability;
}

module.exports = getSchedule;
