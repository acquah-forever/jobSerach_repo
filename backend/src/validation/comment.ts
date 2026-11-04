import { z } from 'zod';

const commentSchema = z.object({
    comment: z.string().trim().min(1)
});

export type CommentInput = z.infer<typeof commentSchema>;