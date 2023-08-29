import * as yup from 'yup';
import { passwordRules } from './mailPasswordRules';

const profileSchema = yup.object().shape({
  password: passwordRules,
});

export default profileSchema;
