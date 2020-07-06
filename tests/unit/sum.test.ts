import assert from 'assert';
const sum = (x: number, y: number): number => x + y;

it('sum 4 + 7 = 11', () => {
  assert(true);
  expect(sum(4, 7)).toEqual(11);
});
