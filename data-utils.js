



export function makePurchaseFrequencyCountMap(labels) {
    const countMap = {};

    for (let label of labels) {
        const frequency = label.purchase_frequency;

        if (countMap[frequency]) {
            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }
    }
		return countMap;
}