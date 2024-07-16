const { crateWeights, totalHeight, averageWeight } = require('./main');

// Test 1


// Test 2
test('crateWeights should average correctly', function () {
    totalValue = 0;
    crateWeights.forEach(weight => {
        totalValue += weight;
    });

    averageCrateWeight = totalValue / crateWeights.length;

    expect(averageWeight).toEqual(averageCrateWeight)
})

// Test 3