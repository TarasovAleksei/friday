import axios from 'axios'

// const baseUrlLocal = "http://localhost:7542/2.0/"
const baseUrlForDeploy = 'https://neko-back.herokuapp.com/2.0'
const instance = axios.create({
    baseURL: baseUrlForDeploy,
    withCredentials: true,
})

// api
export const authAPI = {
    register(login: LoginType) {
        return instance.post<LoginType, ResponseRegistration>('/auth/register', login)
    },
    forgot(data: ForgotData) {
        return instance.post<ForgotData, ResponseForgot>('/auth/forgot', data)
    },
    login({email, password, rememberMe}: LoginParamsType) {
        return instance.post<LoginParamsType, ResponseLogin>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseLogout>('auth/me')
    },
    me() {
        return instance.post<UserData>('auth/me')
    },
    setNewPass(data: NewPassData) {
        return instance.post<NewPassData, ResponseNewPass>('auth/set-new-password', data)
    }
}
export const packsAPI = {
    getPacks(pageCount: number, page: number, sortPacks: string) {
        return instance.get<cardsPacksResponse>(`cards/pack?pageCount=${pageCount}&page=${page}&sortPacks=${sortPacks}`)
    }
}
export const cardsAPI = {
    getCards(cardsPack_id: string, pageCount: number, page: number, sortPacks: string) {
        return instance.get<cardsResponse>(`cards/card?cardsPack_id=${cardsPack_id}&page=${page}&pageCount=${pageCount}&sortPacks=${sortPacks}`)
    }
}
// types
export type cardsPacksResponse = {
    cardsPacks: cardsPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
export type cardsPacksType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}
export type cardsResponse = {
    cards: cardsType[],
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type cardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}
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
    info?: string,
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



