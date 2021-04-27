import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "376d6d73-ae3d-46e4-8894-209dab39c2c3"
    }
})

export const userAPI = {
    getUsers (currentPage = 1,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}
export const profileAPI = {
    getProfile (userId = "2"){
        return instance.get(`profile/`+ userId)
            .then(response => {
                return response.data
            })
    }

}
export const followAPI = {
    follow (id = 2){
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow (id = 2){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }

}
export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }

}