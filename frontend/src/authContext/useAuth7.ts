import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type CommentInput, createComment, deleteComment } from '../api/comment'

export function useCreateComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CommentInput) => createComment(data),

        onSuccess: (_newComment, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['blog', variables.blogId]
            })
        }
    })
}

interface DeleteCommentInput {
    commentId: string,
    blogId: string
}

export function useDeleteComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: DeleteCommentInput) => deleteComment(data.commentId),

        onSuccess: (_deletedComment, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['blog', variables.blogId]
            })
        }
    })
}