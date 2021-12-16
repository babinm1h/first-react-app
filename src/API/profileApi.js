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
        return instance.put(`profile/status`, { status: status })
    },

    savePhoto(img) {
        let formData = new FormData();
        formData.append("image", img)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}