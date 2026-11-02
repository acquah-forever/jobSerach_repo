import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SupportInput, createMessage } from "../api/support";

export function useMessage(){
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (data: SupportInput) => createMessage(data),
        onSuccess: (newMessage) => {
            queryClient.setQueryData(["support"], newMessage)

        }
    })
};