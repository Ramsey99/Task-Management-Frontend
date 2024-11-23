import { useState, useEffect } from 'react';
import { login } from '../api/auth';
import { saveToken, getToken, clearToken } from '../utils/storage';
import { getuser } from '../api/user';

const useAuth = () => {
    const [user, setUser] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = getToken(); // Assuming you store the JWT here
            console.log('Fetching user data...');

            if (token) {
                try {
                    const res = await getuser(token);
                    console.log(res.user);
                    setUser(res.user); // Set user state with the fetched user data
                } catch (err) {
                    console.error('Failed to fetch user data:', err);
                    logout(); // Clear token on error
                    setUser(null); // Clear user state
                }
            } else {
                setUser(null); // Clear user state if no token
            }

            setLoading(false); // Set loading to false after checking
        };

        fetchUserData();
    }, []);

    const logout = () => {
        localStorage.removeItem('token'); // Remove token on logout
        setUser(null); // Clear user state
    };

    return { user, loading, logout };
};

export default useAuth;
