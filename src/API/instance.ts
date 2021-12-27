import axios from "axios";
import { UserType } from "../types/usersTypes";

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export type GetItemsType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

export type MyResponseType<T = {}> = {
    data: T,
    messages: string[],
    resultCode: ResultCodeEnum
}



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "df78ff5f-cf7b-4b70-9259-0d69f0333306"
    }
})

export default instance;

