import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlog } from '../api/blog'

export function useBlogs() {

    return useQuery({
        queryKey: ['blogs'],
        // To identify and organise queries in TanStack Query's cache.
        queryFn: getBlogs,
        // queryFn doesnt require an arguement because it is fetching all blogs, not a specific one
        retry: false,
        refetchOnWindowFocus: false
    })
}

export function useBlog(blogId: string | null) {

    return useQuery({
        queryKey: ['blog', blogId],
        // To identify and organise queries in TanStack Query's cache.
        queryFn: () => getBlog(blogId!),
        // queryFn requires an argument because it is fetching a specific blog
        // The blogId is guaranteed to be non-null due to the enabled condition(!)
        retry:false,
        refetchOnWindowFocus: false,
        enabled: Boolean(blogId)
        // It prevents the query from automatically executing when blogId is falsy.

    })
}