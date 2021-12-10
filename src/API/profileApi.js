import * as axios from "axios"


export const profileApi = {
    setProfile() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`)
            .then(response => response.data)
    }
}