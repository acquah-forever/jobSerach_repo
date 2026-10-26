const API_URL = import.meta.env.VITE_API_URL.trim();
if (!API_URL) throw new Error("VITE_API_URL is not set");

export interface Blog {
    _id: string,
    section: string,
    title: string,
    blurb: string,
    body1: string,
    body2: string,
    body3: string,
    body4: string,
    body5: string,
    body6: string,
}

export async function getBlogs(): Promise<Blog[]> {
    const response = await fetch(`${API_URL}/blog`)

    if (!response.ok) {
        throw new Error("Failed to Fetch blogs. Please try again later");
    }
    return response.json() as Promise<Blog[]>;

}


export async function getBlog(blogId: string): Promise<Blog> {
    const response = await fetch(`${API_URL}/blog/${blogId}`)

    if (!response.ok) {
        throw new Error("Failed to Fetch blog. Please try again later");
    }
    return response.json() as Promise<Blog>;

}