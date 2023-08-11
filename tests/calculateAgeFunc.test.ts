import calculateAge from '../src/utils/forms/calculateAgeFunc';

describe('calculateAge', () => {
  it('is a function', () => {
    expect(typeof calculateAge).toBe('function');
  });

  it('calculates age correctly if today is birthday', () => {
    const birthDate = new Date();
    const expectedAge = 0;

    expect(calculateAge(birthDate)).toBe(expectedAge);
  });

  it('calculates age correctly if a birth date has already occurred this year', () => {
    const birthDate = new Date('1990-05-10');
    const expectedAge = new Date().getFullYear() - birthDate.getFullYear();

    expect(calculateAge(birthDate)).toBe(expectedAge);
  });

  it('calculates age correctly for a age that is not 13 yet in this year', () => {
    const birthDate = new Date('2000-11-25');
    const expectedAge = new Date().getFullYear() - birthDate.getFullYear() - 1;

    expect(calculateAge(birthDate)).toBe(expectedAge);
  });
});
