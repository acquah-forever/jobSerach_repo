import { z } from 'zod';

export const commentSchema = z.object({
    blogId: z.string().min(1, "Blog Id is required"),
    comment: z.string().min(1,'Comment cannot be empty').trim()
});

export type CommentInput = z.infer<typeof commentSchema>;