import axios from 'axios';

const request = axios.create({
    baseURL:"http://localhost:8000/api",
    headers:{
        "Content-Type":"application/json"
    }
})
 

export const get = async(path: string) => {
    const response = await request.get(path);
    return response.data;
}
 

export default request;