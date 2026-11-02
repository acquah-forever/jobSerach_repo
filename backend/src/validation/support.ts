import { z } from "zod";

export const supportSchema = z.object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
    message: z.string().trim().min(1, "Message is required")
});

export type SupportInput = z.infer<typeof supportSchema>;
