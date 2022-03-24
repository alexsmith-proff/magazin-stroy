import axiosInstance from "../axios/axios";

const carouselEndPoints = {
    createCarouselItem: (data) => axiosInstance.post("/api/carousel/create", data),
    getCarousel: (data) => axiosInstance.get("/api/carousel/", data),
}

export default carouselEndPoints