const soma = require('./script');

test('soma dois valores numéricos', () => {
  expect(soma(2,3)).toBe(5);
})
