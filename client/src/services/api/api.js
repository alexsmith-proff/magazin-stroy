import authEndPoints from "./endpoints/auth.endpoints";
import carouselEndpoints from "./endpoints/carousel.endpoints";
import categoryEndpoints from "./endpoints/category.endpoints";

const allEndPoints = {
    auth: authEndPoints,
    carousel: carouselEndpoints,
    category: categoryEndpoints,
}

export default allEndPoints