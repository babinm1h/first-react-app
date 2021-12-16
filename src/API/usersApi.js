import instance from "./instance";


export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`, { withCredentials: true })
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`
            , {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
            }
        })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`
            , {
                withCredentials: true,
                headers: {
                    "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
                }
            })
    }
}