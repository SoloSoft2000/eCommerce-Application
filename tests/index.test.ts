import pifagor from '../src/index';

test('pifagor(3, 4) should return 5', () => {
  expect(pifagor(3, 4)).toBe(5);
});

test('pifagor(-3, -4) should return 5', () => {
  expect(pifagor(-3, -4)).toBe(5);
});

test('pifagor(0, 0) should return 0', () => {
  expect(pifagor(0, 0)).toBe(0);
});
