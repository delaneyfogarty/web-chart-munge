export function makePurchaseFrequencyCountMap(labels) {
  const countMap1 = {};

  for (let label of labels) {
    const frequency = label.purchase_frequency;

    if (countMap1[frequency]) {
      countMap1[frequency]++;
    } else {
      countMap1[frequency] = 1;
    }
  }
  return countMap1;
}

export function makeCoolFactorFrequencyCountMap(labels) {
  const countMap2 = {};

  for (let label of labels) {
    const coolness = label.cool_factor;

    if (countMap2[coolness]) {
      countMap2[coolness]++;
    } else {
      countMap2[coolness] = 1;
    }
  }
  return countMap2;
}

export function makeGenderFrequencyCountMap(labels) {
  const countMap3 = {};

  for (let label of labels) {
    const gender = label.gender;

    if (countMap3[gender]) {
      countMap3[gender]++;
    } else {
      countMap3[gender] = 1;
    }
  }
  return countMap3;
}