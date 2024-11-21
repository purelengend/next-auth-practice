'use server';

import { AuthError } from 'next-auth';

// Config
import { SignInFormData } from '../types/auth';
import { signIn } from '@/auth';

export const authenticate = async (
  formData: SignInFormData,
): Promise<void | string> => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      const errorMessages: { [key: string]: string } = {
        ['credentials']:
          'Incorrect username and password. Please help to try again.',
      };
      return errorMessages[error.type] || 'Something went wrong';
    }
    throw error;
  }
};
