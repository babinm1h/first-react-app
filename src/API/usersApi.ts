import instance, { GetItemsType, MyResponseType } from "./instance";


export const usersAPI = {
    getUsers(currentPage: number, count: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${count}`, { withCredentials: true })
            .then(response => response.data)
    },

    follow(userId: number) {
        return instance.post<MyResponseType>(`follow/${userId}`
            , {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
            }
        })
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`
            , {
                withCredentials: true,
                headers: {
                    "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
                }
            })
    }
}