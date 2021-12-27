import { PhotosType, ProfileType } from "../types/profileTypes"
import instance, { MyResponseType } from "./instance"


type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileApi = {
    setProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },

    setStatus(status: string) {
        return instance.put<MyResponseType>(`profile/status`, { status: status })
    },

    savePhoto(img: any) {
        let formData = new FormData();
        formData.append("image", img)
        return instance.put<MyResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile: ProfileType) {
        return instance.put<MyResponseType>(`profile`, profile)
    }
}