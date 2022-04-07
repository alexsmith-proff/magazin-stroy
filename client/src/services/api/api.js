import authEndPoints from "./endpoints/auth.endpoints"
import carouselEndpoints from "./endpoints/carousel.endpoints"
import categoryEndpoints from "./endpoints/category.endpoints"
import productEndpoints from "./endpoints/product.endpoints"


const allEndPoints = {
    auth: authEndPoints,
    carousel: carouselEndpoints,
    category: categoryEndpoints,
    product: productEndpoints,
}

export default allEndPoints