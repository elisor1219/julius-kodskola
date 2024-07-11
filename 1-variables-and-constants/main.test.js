const { name, age } = require('./main');

test('name should be Julius', function () {
    expect(name).toBe('Julius');
})

test('age should be 24', function () {
    expect(age).toBe(24);
})