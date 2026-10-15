import { z } from 'zod';

export const usersSchema = z.object({
    name: z.string().min(50).trim(),
    email: z.string().min(254).trim(),
    password: z.string().min(128).trim()
}).strict();

export type UsersInput = z.infer<typeof usersSchema>;

