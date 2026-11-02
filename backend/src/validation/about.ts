import { z } from "zod";

export const aboutSchema = z.object({
    about: z.string().trim().min(1)
});

export type AboutInput = z.infer<typeof aboutSchema>;
