const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  const expectedValue = 'dcba';
  const actualValue = reverse('abcd');
  expect(actualValue).toEqual(expectedValue);
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
