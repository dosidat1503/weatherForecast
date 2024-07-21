import axios from 'axios';

const request = axios.create({
    baseURL:"https://weather-forecast-server.vercel.app/api",
    headers:{
        "Content-Type":"application/json"
    }
})
 

export const get = async(path: string) => {
    const response = await request.get(path);
    return response.data;
}
 

export default request;