// src/api/auth.js
import { API_BASE_URL, defaultHeaders } from './config';

export const login = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(credentials),
    });
    return response.json();
};

export const signup = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(userData)
    });
    return response.json();
};




