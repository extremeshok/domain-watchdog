import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


export interface Event {
    action: string
    date: string
}

export interface Entity {
    handle: string
    events: Event[]
    roles: string[]
}

export interface Nameserver {
    ldhName: string
    entities: Entity[]
}

export interface Tld {
    tld: string
    contractTerminated: boolean
    dateOfContractSignature: string
    registryOperator: string
    delegationDate: string
    removalDate: string
    specification13: boolean
    type: string
}

export interface Domain {
    ldhName: string
    handle: string
    status: string[]
    events: Event[]
    entities: Entity[]
    nameservers: Nameserver[]
    tld: Tld
}

export interface User {
    email: string
    roles: string[]
}

export interface Watchlist {
    domains: string[]
    triggers: Event[]
}

export async function request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig): Promise<R> {
    const axiosConfig: AxiosRequestConfig = {
        ...config,
        baseURL: '/api',
        withCredentials: true,
        headers: {
            ...config.headers,
            Accept: 'application/json'
        }
    }
    return await axios.request<T, R, D>(axiosConfig)
}

export * from './domain'
export * from './tld'
export * from './user'
export * from './watchlist'

