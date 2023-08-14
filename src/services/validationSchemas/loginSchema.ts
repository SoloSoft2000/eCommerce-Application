import * as yup from 'yup';
import { emailRules, passwordRules } from './mailPasswordRules';

const loginSchema = yup.object({
  email: emailRules,
  password: passwordRules,
});

export default loginSchema;
