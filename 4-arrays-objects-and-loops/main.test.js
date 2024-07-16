const { characters, totalHeight } = require('./main');

// Test 1


// Test 2
test('totalHeight should equal the sum of all characters heights', function () {
    let testTotalHeight = 0;
    characters.forEach((character) => {
        testTotalHeight += character.height;
    })

    expect(totalHeight).toEqual(testTotalHeight)
})

// Test 3