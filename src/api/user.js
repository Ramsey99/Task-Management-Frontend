import { API_BASE_URL } from './config';
export const getuser= async(token) => {    
    const response = await fetch(`${API_BASE_URL}/users/check`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Specify content type if needed
            'Authorization': `Bearer ${token}` // Pass the token here
        },
    });
    return response.json();
}