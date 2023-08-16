import Main from '../src/сomponents/Main';

test('Main component is defined and it is a function', () => {
  expect(Main).toBeDefined();
  expect(typeof Main).toBe('function');
  expect(Main).not.toBeNull();
});
