// src/api/config.js
import { getToken } from "../utils/storage";
const token=getToken();

export const API_BASE_URL = 'https://task-management-system-backend-one.vercel.app/api';

export const defaultHeaders = {
    'Content-Type': 'application/json',
};

export const defaultHeaderswithtoken = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};
