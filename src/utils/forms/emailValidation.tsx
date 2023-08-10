const emaildValidation = {
  required: {
    value: true,
    message: 'The email field is required',
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      'Enter a valid email address (e.g., user@example.com) with no leading or trailing spaces, containing a domain name and "@" symbol.',
  },
};

export default emaildValidation;
