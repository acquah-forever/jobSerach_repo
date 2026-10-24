const API_URL = import.meta.env.VITE_API_URL.trim();
if (!API_URL) throw new Error("VITE_API_URL is not set");

export interface User {
    name: string;
    email: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

interface ApiError {
    error: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();

    if (!response.ok) {
        throw new Error((data as ApiError).error || "Request Failed. Please try again later");
    }

    return data;
}

export async function getAuthenticatedUser(): Promise<User> {
    const response = await fetch(`${API_URL}/users`, {
        credentials: "include",
    });

    return handleResponse<User>(response);
}

export async function signupUser(data: SignupData): Promise<User> {
    const response = await fetch(`${API_URL}/users/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    return handleResponse<User>(response);
}

export async function loginUser(data: LoginData): Promise<User> {
    const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    return handleResponse<User>(response);
}

export async function logoutUser(): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/users/logout`, {
        method: "POST",
        credentials: "include",
    });

    return handleResponse<{ message: string }>(response);
}