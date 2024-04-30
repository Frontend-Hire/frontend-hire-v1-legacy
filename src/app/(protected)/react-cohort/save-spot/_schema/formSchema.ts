import { z } from 'zod';

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Full name must be at least 2 characters',
    })
    .max(100),
  htmlExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  cssExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  jsExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  reactExperience: z.enum(['lessThan6', 'moreThan6']).optional(),
  areYouAStudent: z.enum(['yes', 'no']).optional(),
  linkedIn: z.string().url().optional(),
});
