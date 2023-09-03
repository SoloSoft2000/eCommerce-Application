import * as yup from 'yup';
import { passwordRules } from './mailPasswordRules';

const profileSchema = yup.object().shape({
  oldPassword: passwordRules,
  password: passwordRules,
  repeatPassword: passwordRules.oneOf(
    [yup.ref('password')],
    'Passwords must match'
  ),
});

export default profileSchema;
