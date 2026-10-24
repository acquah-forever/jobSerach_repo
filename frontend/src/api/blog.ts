const API_URL = import.meta.env.VITE_API_URL.trim();
if (!API_URL) throw new Error("VITE_API_URL is not set");

export interface Blog {
    _id: string,
    title: string,
    body: string,
    comment: string,
}

export async function getBlog(): Promise<Blog[]> {
    const response = await fetch(`${API_URL}/blog`)

    if (!response.ok) {
        throw new Error("Failed to Fetch blog. Please try again later");
    }
    return response.json() as Promise<Blog[]>;

}