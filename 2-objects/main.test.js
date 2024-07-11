const { luke, lukes_combined_height_and_mass } = require('./main');

test('Lukes height and mass should be combined into lukes_combined_height_and_mass', function () {
    expect(lukes_combined_height_and_mass).toEqual(luke.mass + luke.height);
})