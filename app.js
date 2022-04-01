
  import { customers } from './data.js';
  import { makePurchaseFrequencyCountMap } from './data-utils.js';


  const countMap = makePurchaseFrequencyCountMap(customers);

  const labels = Object.keys(countMap);


  const data = {
    labels: labels,
    datasets: [{
    label: 'FIRST TABLE',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: Object.values(countMap),
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );