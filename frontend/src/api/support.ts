const API_URL = import.meta.env.VITE_API_URL;

export interface SupportValue {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    message: string
}

export async function createMessage(data: SupportValue) {
    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    });

    if(!response.ok) {
        throw new Error("Something went wrong")

    }

    return response.json()
}