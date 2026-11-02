const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) throw new Error("VITE_API_URL is not set");


interface Support {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    message: string,
    createdAt: string,
    updatedAt: string
}

export type SupportInput = Omit<Support, "_id" | "createdAt" | "updatedAt">;

export async function createMessage(data: SupportInput) {
    const response = await fetch(`${API_URL}/support`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    });

    if (!response.ok) {
        throw new Error("Failed to create about message")

    }

    return response.json()
}