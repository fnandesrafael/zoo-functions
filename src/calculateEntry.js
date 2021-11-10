const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // Estrutura lógica que filtra o parâmetro entrants em 3 diferentes grupos, child, adult e senior. Cada um com sua respectiva margem criada de acordo com o filter.
  // Retorna esses 3 filtros em um objeto.
  return {
    child: entrants.filter((people) => people.age < 18).length,
    adult: entrants.filter((people) => people.age >= 18 && people.age < 50).length,
    senior: entrants.filter((people) => people.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // Na linha 15 é verificado se o parametro passado é de fato um array, caso não seja o retorno é 0.
  if (Array.isArray(entrants) === false) return 0;
  // Na linha 17 a constante visitorNum recebe os objetos da função countEntrants
  const visitorsNum = countEntrants(entrants);
  // Na linha 19, o uso de destructuring é feito para atribuir os valores da função countEntrants às chaves child, adult e seniro.
  // Na linha 20, essas chaves recebem o valor dos preços de entrada do arquivo zoo_data.js atravéz de destructuring também.
  // Por fim na linha 23 os valores child, adult e senior que anteriormente haviam recebido seus valores de acordo com a função countEntrants, agora são multiplicaodos pelos valores de childPrices, adultPrices e seniorPrices.
  const { child, adult, senior } = visitorsNum;
  const { child: childPrices, adult: adultPrices, senior: seniorPrices } = data.prices;
  const saida = (child * childPrices) + (adult * adultPrices) + (senior * seniorPrices);
  return saida;
}

module.exports = { calculateEntry, countEntrants };
