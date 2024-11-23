import { API_BASE_URL,defaultHeaderswithtoken } from './config';
export const addtask= async(userdata) => {
    
    const data={
        "title": userdata.title,
        "description": userdata.description,
        "last_date": userdata.lastDate
    }
    const response = await fetch(`${API_BASE_URL}/task/create/${userdata.category}`, {
        method: 'POST',
        headers: defaultHeaderswithtoken,
        body: JSON.stringify(data),
    });
    return response.json();
}

export const gettask= async() => {
    
    const response = await fetch(`${API_BASE_URL}/task/getTask`, {
        method: 'GET',
        headers: defaultHeaderswithtoken
    });
    return response.json();
}