import axios from 'axios';

const request = axios.create({
    baseURL:"https://weather-forecast-server.vercel.app/api/",
    headers:{
        "Content-Type":"application/json"
    }
})
 
const metaElement = document.querySelector('meta[name="csrf-token"]');
const token = metaElement ? metaElement.getAttribute('content') : null;

if (token) {
    request.defaults.headers.common['X-CSRF-TOKEN'] = token;
}

request.defaults.headers.post['Content-Type'] = 'application/json';
request.defaults.headers.put['Content-Type'] = 'application/json';
request.defaults.headers.patch['Content-Type'] = 'application/json';

export const get = async(path: string) => {
    const response = await request.get(path);
    return response.data;
}
 

export default request;