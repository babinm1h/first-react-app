import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
    }
})

export default instance;