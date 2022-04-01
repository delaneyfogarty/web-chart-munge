/* eslint-disable no-console */

import { customers } from './data.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorFrequencyCountMap, makeGenderFrequencyCountMap } from './data-utils.js';


const countMap1 = makePurchaseFrequencyCountMap(customers);
console.log(countMap1);
const labels1 = Object.keys(countMap1);


const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Amount Of Customers',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: Object.values(countMap1),
  }]
};

const config = {
  type: 'bar',
  data: data1,
  options: {}
};
//eslint-disable-next-line
const barChart = new Chart(
  document.getElementById('barChart'),
  config
);

const countMap2 = makeCoolFactorFrequencyCountMap(customers);
console.log(countMap2);
const labels2 = Object.keys(countMap2);

const data2 = {
  labels: labels2,
  datasets: [{
    label: 'Amount Of Customers',
    backgroundColor: 'rgb(100, 100, 100)',
    borderColor: 'rgb(109, 234, 244)',
    data: Object.values(countMap2),
  }]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {}
};

//eslint-disable-next-line
const lineChart = new Chart(
  document.getElementById('lineChart'),
  config2
);

const countMap3 = makeGenderFrequencyCountMap(customers);
console.log(countMap3);
const labels3 = Object.keys(countMap3);

const data3 = {
  labels: labels3,
  datasets: [{
    label: 'Amount of Customers',
    backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'magenta', 'indigo'],
    borderColor: 'black',
    data: Object.values(countMap3),
  }]
};

const config3 = {
  type: 'pie',
  data: data3,
  options: {}
};
//eslint-disable-next-line
const pieChart = new Chart(
  document.getElementById('pieChart'),
  config3
);