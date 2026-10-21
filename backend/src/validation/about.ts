import { z } from "zod";

export const aboutSchema = z.object({
    about: z.string().min(1).trim(),
});

export type AboutInput = z.infer<typeof aboutSchema>;
