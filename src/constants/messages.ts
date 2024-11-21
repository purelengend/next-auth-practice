export const MESSAGES = {
  ERROR: {
    EMAIL_INVALID: 'Invalid email address format.',
    FIELD_REQUIRED: 'This field is required.',
    FIELD_INVALID: (fieldName: string) => `Invalid format of ${fieldName}.`,
    GENERAL_INVALID_PASSWORD: 'Invalid password',
    INVALID_PASSWORD:
      'Password must be between 8 and 32 characters, and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.',
    EMAIL_PASSWORD_INVALID:
      'Incorrect email and password. Please help to try again.',
    UNKNOWN_ERROR: 'Something went wrong.',
  },
};
