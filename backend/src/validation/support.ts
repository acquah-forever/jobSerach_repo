import { z } from "zod";

export const supportSchema = z.object({
    firstName: z.string().min(1).trim(),
    lastName: z.string().min(1).trim(),
    email: z.string().min(1).trim().toLowerCase(),
    message: z.string().min(1).trim() 
});

export type SupportnInput = z.infer<typeof supportSchema>;
