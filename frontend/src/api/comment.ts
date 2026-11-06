const API_URL = import.meta.env.VITE_API_URL;
if(!API_URL) throw new Error("VITE_API_URL is not set");

interface CommentValue {
    id: string,
    blogId: string,
    comment: string,
    createdAt: string,
    updatedAt: string
};

export type CommentInput = Omit<CommentValue, |'id' |'createdAt' | 'updatedAt'>

export async function createComment(data: CommentInput) {
    const response = await fetch(`${API_URL}/comment`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });
    
    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message || "Comment cannot be created");
    }

    return response.json()
};