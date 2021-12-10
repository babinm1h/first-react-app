import * as axios from "axios";



export const usersAPI = {
    getUsers(currentPage, count) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${count}`)
            .then(response => response.data)
    }
}