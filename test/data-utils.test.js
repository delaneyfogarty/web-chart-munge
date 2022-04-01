// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makePurchaseFrequencyCountMap, makeCoolFactorFrequencyCountMap, makeGenderFrequencyCountMap } from '../data-utils.js';
import { customers } from '../data.js';

const test = QUnit.test;

test('takes in customer data and returns a purchase frequency count map', (expect) => {
    //Arrange
  const countMap1 = {
    Daily: 142,
    Monthly: 123,
    Never: 123,
    Often: 126,
    Once: 107,
    Seldom: 129,
    Weekly: 122,
    Yearly: 128,
  };


    // Set up your arguments and expectations
  const expected = countMap1;

    //Act
    // Call the function you're testing and set the result to a const
  const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});

test('take in customer data and return a cool factor frequency count map', (expect) => {
  const countMap2 = {
    1: 109,
    2: 119,
    3: 99,
    4: 101,
    5: 93,
    6: 102,
    7: 101,
    8: 99,
    9: 82,
    10: 95,
  };

  const expected = countMap2;

  const actual = makeCoolFactorFrequencyCountMap(customers);

  expect.deepEqual(actual, expected);
});

test('take in customer data and return a gender frequency count map', (expect) => {
  const countMap3 = {
    'Agender': 17,
    'Bigender': 14,
    'Female': 457,
    'Genderfluid': 18,
    'Genderqueer': 11,
    'Male': 448,
    'Non-binary': 24,
    'Polygender': 11,
  };

  const expected = countMap3;

  const actual = makeGenderFrequencyCountMap(customers);

  expect.deepEqual(actual, expected);
});
