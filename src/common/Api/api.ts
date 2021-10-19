import axios from 'axios'

// const baseUrlLocal = "http://localhost:7542/2.0/"
const baseUrlForDeploy = 'https://neko-back.herokuapp.com/2.0'
const instance = axios.create({
    baseURL: baseUrlForDeploy,
    withCredentials: true,
    // headers: {
    //     'API-KEY': 'de342f74-3acb-43a4-b6f0-3143b51bea1e'
    // }
})

// api
export const authAPI = {
    register(login: LoginType) {
        return instance.post<LoginType, ResponseRegistration>('/auth/register', login)
    },
    forgot(data: ForgotData) {
        return instance.post<ForgotData,ResponseForgot >('/auth/forgot', data)
    },
    login({email, password, rememberMe}: LoginParamsType) {
        return instance.post<LoginParamsType, ResponseLogin> ('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseLogout>('auth/me')
    },
    me() {
        return instance.post<UserData>('auth/me')
    },
    setNewPass(data:NewPassData){
        return instance.post<NewPassData, ResponseNewPass>('auth/set-new-password', data)
    }
}

// types
export type ResponseRegistration = {
    addedUser?: {}
    error?: string
}
export type LoginType = {
    email: string
    password: string
}
export type ResponseLogin = {
    data: UserData
}
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}
export type ResponseLogout = {
    info: string
    error: string
}
export type ResponseForgot = {
    info: string
    error: string
}
export type ResponseNewPass = {
    info?:string,
    error?: string
}
export type UserData = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}
export type ForgotData = {
    email: string
    from: string
    message: string
}
export type NewPassData = {
    password: string,
    resetPasswordToken: string
}



