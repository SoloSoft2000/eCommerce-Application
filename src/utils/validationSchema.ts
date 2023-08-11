import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email address must be properly formatted (e.g., user@example.com)')
    .matches(/@.+\.+/, {
      message:
        "Email address must contain an '@' symbol separating local part and domain name.",
      excludeEmptyString: true,
    }),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    )
    .trim('Password must not contain leading or trailing whitespace'),
});

export default loginSchema;
