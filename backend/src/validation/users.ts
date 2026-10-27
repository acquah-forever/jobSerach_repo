import { z } from 'zod';

export const usersSchema = z.object({
    name: z.string().min(1).trim(),
    email: z.string().min(1).trim().toLowerCase().email(),
    password: z.string().min(8)
});

export const loginSchema = z.object({
    email: z.string().min(1).trim().toLowerCase().email(),
    password: z.string().min(8)
});

export type UsersInput = z.infer<typeof usersSchema>;
export type LoginInput = z.infer<typeof loginSchema>;


