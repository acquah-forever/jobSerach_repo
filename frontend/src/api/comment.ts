const API_URL = import.meta.env.VITE_API_URL?.trim();
if(!API_URL) throw new Error("VITE_API_URL is not set");

interface CommentValue {
    _id: string,
    blogId: string,
    comment: string,
    createdAt: string,
    updatedAt: string
};

export type CommentInput = Omit<CommentValue, |'_id' |'createdAt' | 'updatedAt'>

export async function createComment(data: CommentInput): Promise<CommentValue> {

    const response = await fetch(`${API_URL}/comment`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });
    

    if (!response.ok) throw new Error("Comment cannot be created");

    return response.json() as Promise<CommentValue>;
};


export async function deleteComment(commentId: string): Promise<void> {

    const response = await fetch(`${API_URL}/comment/${commentId}`, {
        method: "DELETE",
        credentials: "include"
    });

    if (!response.ok) throw new Error("Unable to delete comment. Please try again later");

};