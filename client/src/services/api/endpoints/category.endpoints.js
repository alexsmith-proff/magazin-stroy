import axiosInstance from "../axios/axios";

const categoryEndpoints = {
    createCategoryItem: (data) => axiosInstance.post('/api/category/create', data),
    getCategory: (data) => axiosInstance.get('/api/category', data),
    // getCategoryId: (data) => axiosInstance.get('/api/category/' + id, data),
}
export default categoryEndpoints
