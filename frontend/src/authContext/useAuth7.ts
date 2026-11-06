import{ useMutation, useQueryClient } from '@tanstack/react-query';
import { type CommentInput, createComment } from '../api/comment'

export function useCreateComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CommentInput) => createComment(data),
        
        onSuccess: (newComment) => {
            queryClient.setQueryData(['comment'], newComment)
        }
    })
}