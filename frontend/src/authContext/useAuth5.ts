import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlog } from '../api/blog'

export function useBlogs() {

    return useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs,
        retry: false,
        refetchOnWindowFocus: false
    })
}

export function useBlog(blogId: string | null) {

    return useQuery({
        queryKey: ['blog', blogId],
        queryFn: () => getBlog(blogId),
        retry:false,
        refetchOnWindowFocus: false,
        enabled: Boolean(blogId)

    })
}