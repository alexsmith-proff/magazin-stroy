import axiosInstance from "../axios/axios";

const productEndpoints = {
    createProduct: (data) => axiosInstance.post('/api/product/create', data),
    getProduct: (data) => axiosInstance.get('/api/product/' + data.id, data),
}

export default productEndpoints