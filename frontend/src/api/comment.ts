const API_URL = import.meta.env.VITE_API_URL;
if(!API_URL) throw new Error("VITE_API_URL is not set");

interface CommentValue {
    id: string,
    comment: string,
    createdAt: string,
    updatedAt: string
};

export type CommentInput = Omit<CommentValue, |'id' |'createdAt' | 'updatedAt'>

export async function createComment(data: CommentInput) {
    const response = await fetch(`${API_URL}/comment`, {
        method: "POST",
        headers: {
            "Content-type" : "application.json"
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) throw new Error("Comment can not be created. Try again later");

    return response.json()
};