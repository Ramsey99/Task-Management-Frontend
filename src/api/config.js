// src/api/config.js
import { getToken } from "../utils/storage";
const token=getToken();
export const API_BASE_URL = 'http://localhost:3030/api';

export const defaultHeaders = {
    'Content-Type': 'application/json',
};

export const defaultHeaderswithtoken = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};
