import axios from 'axios'

const baseUrlLocal = "http://localhost:7542/2.0/"
// const baseUrlForDeploy = 'https://github.com/IgnatZakalinsky/cards-nya-back-2-0'
const instance = axios.create({
    baseURL: baseUrlLocal,
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
    login({email, password, rememberMe}: LoginParamsType) {
        return instance.post<LoginParamsType, ResponseLogin>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseLogout>('auth/me')
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
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}
export type ResponseLogout = {
    info: string
    error: string
}



