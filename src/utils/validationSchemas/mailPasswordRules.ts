import * as yup from 'yup';

export const emailRules = yup
  .string()
  .test(
    'no-spaces',
    'The field cannot contain spaces',
    (value) => !/\s/.test(value as string)
  )
  .required('Email is required')
  .email(
    'Email address must be properly formatted (e.g., user@example.com), only Latin letters'
  )
  .matches(/@.+\.+/, {
    message:
      "Email address must contain an '@' symbol separating local part and domain name.",
    excludeEmptyString: true,
  });

export const passwordRules = yup
  .string()
  .test(
    'no-spaces',
    'The field cannot contain spaces',
    (value) => !/\s/.test(value as string)
  )
  .required('Password is required')
  .matches(
    /^[A-Za-z0-9!@#$%^&*_\-+=]+$/,
    'Password can only contain Latin letters, digits, and special characters !@#$%^&*_-+='
  )
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one digit')
  .matches(
    /[!@#$%^&*_\-+=]/,
    'Password must contain at least one of the special characters !@#$%^&*_-+='
  )
  .min(8, 'Password must be at least 8 characters long');
