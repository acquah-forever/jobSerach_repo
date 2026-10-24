import { useQuery } from "@tanstack/react-query";
import { getBlog } from '../api/blog'

export function useBlog() {

    return useQuery({
        queryKey: ['blog'],
        queryFn: getBlog,
        retry: false,
        refetchOnWindowFocus: false
    })
}