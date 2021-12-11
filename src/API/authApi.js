import * as axios from "axios";
import instance from "./instance";


export const authApi = {
    getAuth() {
        return instance.get(`auth/me`, { withCredentials: true })
    }
}