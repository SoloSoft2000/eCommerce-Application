function calculate(a: number, b: number): number {
  return a + b;
}

describe('calculate function', () => {
  it('should return the sum of two numbers', () => {
    const result = calculate(3, 5);
    expect(result).toBe(8);
  });
});
