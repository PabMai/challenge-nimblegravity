import {z} from 'zod';

export const ToastDataSchema = z.object({
  message: z.string(),
  type: z.enum(['success', 'error']),
});

export type ToastData = z.infer<typeof ToastDataSchema>;