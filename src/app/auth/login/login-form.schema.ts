'use client';
 
import { z } from 'zod';
 
export const FormSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8),
});
