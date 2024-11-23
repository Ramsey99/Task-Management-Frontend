import { API_BASE_URL ,defaultHeaders} from './config';
import { getToken } from '../utils/storage';
export const getcategories= async() => {
    const token=getToken();
    const response = await fetch(`${API_BASE_URL}/category/getCategories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Specify content type if needed
            'Authorization': `Bearer ${token}` // Pass the token here
        },
    });
    return response.json();
}