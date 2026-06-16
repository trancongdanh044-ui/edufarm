const API_URL = "http://localhost:3000/api";

export const fetchAPI = async (url, method = "GET", body = null, token = null) =>{
    try {
        const headers = {};

        if(body){
            headers["Content-Type"] = "application/json";
        }

        if(token){
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_URL}${url}`,{
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        const data = await response.json();

        if(!response.ok){
            throw new Error(data.message || "Có lỗi xảy ra");
        }

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}