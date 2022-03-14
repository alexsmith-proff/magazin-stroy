import axiosInstance from "../axios/axios";

const authEndPoints = {
    registration: (data) => axiosInstance.post("/api/auth/register", data),
    login: (data) => axiosInstance.post("/api/login", data),
}

export default authEndPoints