import { z } from 'zod';

// Constants
import { MESSAGES } from '@/constants';

// Schema Validation for Login
export const signInSchema = z.object({
  username: z.string().min(1, MESSAGES.ERROR.FIELD_REQUIRED),
  password: z.string().min(1, MESSAGES.ERROR.FIELD_REQUIRED),
  remember: z.boolean().optional().default(false),
});
