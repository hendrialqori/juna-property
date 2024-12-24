import { API } from "#/constant"
import axios from "axios"

export const request = axios.create({
    baseURL: API
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});