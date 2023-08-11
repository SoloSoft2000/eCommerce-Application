import birthdayValidation from '../src/utils/forms/ageValidation';

describe('birthdayValidation', () => {
  describe('validAge', () => {
    it('should have the validAge function', () => {
      expect(birthdayValidation.validate.validAge).not.toBeNull();
      expect(typeof birthdayValidation.validate.validAge).toBe('function');
    });

    it('should be true in case the age is 13 or above', () => {
      const correctAge = new Date();
      correctAge.setFullYear(correctAge.getFullYear() - 13);

      const result = birthdayValidation.validate.validAge(correctAge);

      expect(result).toBe(true);
    });

    it('should show an error if age is less than 13', () => {
      const incorrectAge = new Date();
      incorrectAge.setFullYear(incorrectAge.getFullYear() - 12);

      const result = birthdayValidation.validate.validAge(incorrectAge);

      expect(result).toBe('Your age should be 13 and above.');
    });
  });
});
