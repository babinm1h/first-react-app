import * as axios from "axios"
import instance from "./instance"


export const profileApi = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    setStatus(status) {
        return instance.put(`/profile/status`, { status: status })
    }
}