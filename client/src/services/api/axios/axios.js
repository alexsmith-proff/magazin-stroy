import axios from "axios"

// HELP http://nestjs-boilerplate-test.herokuapp.com/docs/#/
const axiosInstance = axios.create({
    // baseURL: 'http://194.87.95.149:5000'
    baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.request.use(config => {
    const authToken = localStorage.getItem('accessToken')
    if(authToken) {
        config.headers.authorization = `Bearer ${authToken}`
    }
    return config
}, error => Promise.reject(error))

export default axiosInstance