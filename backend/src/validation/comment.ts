import { z } from 'zod';

export const commentSchema = z.object({
    comment: z.string().trim().min(1)
});

export type CommentInput = z.infer<typeof commentSchema>;