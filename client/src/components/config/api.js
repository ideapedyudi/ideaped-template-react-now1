import axios from 'axios'
import { BaseUrl } from '../../env'

export const API = axios.create({
    baseURL: BaseUrl
})

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete API.defaults.headers.commin["Authorization"]
    }
}