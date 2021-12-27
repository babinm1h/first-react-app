import instance, { ResultCodeEnum } from "./instance";


type authMeResponseType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodeEnum
    messages: string[]
}

type LoginResponseType = {
    data: { userId: number },
    resultCode: ResultCodeEnum,
    messages: string[]
}



export const authApi = {
    authMe() {
        return instance.get<authMeResponseType>(`auth/me`)
    },

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>(`/auth/login`, { email, password, rememberMe })
    },

    logout() {
        return instance.delete(`/auth/login`)
    }
}