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
    .min(8, 'Password should be at least 8 characters'),
});

export default loginSchema;
