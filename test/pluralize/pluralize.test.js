const expect = require('expect');
const pluralize = require('./pluralize.js');

test('pluralize is a Function', () => {
  expect(pluralize).toBeInstanceOf(Function);
});
test('Produces the plural of the word', () => {
  expect(pluralize(0, 'apple')).toBe('apples');
});
test('Produces the singular of the word', () => {
  expect(pluralize(1, 'apple')).toBe('apple');
});
test('Produces the plural of the word', () => {
  expect(pluralize(2, 'apple')).toBe('apples');
});
test('Prodices the defined plural of the word', () => {
  expect(pluralize(2, 'person', 'people')).toBe('people');
});
const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
test('Works with a dictionary', () => {
  expect(autoPluralize(2, 'person')).toBe('people');
});
