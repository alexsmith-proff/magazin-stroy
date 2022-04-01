import { carouselModel } from "../models/carousel.model.js"
import { productModel } from "../models/product.model.js"

export async function saveCarouselItemDB(item) {
    // console.log(item)
    const carouselItem = new carouselModel({
        title: item.title,
        index: item.index,
        picture: item.picture
    }) 

    // Записываем данные carouselItem в БД
    await carouselItem.save() 
}

export async function getCarousel() {
    return await carouselModel.find().sort({index: 1})
}

export async function getRandomCarousel() {
    return await productModel.aggregate([
       { $sample: {size: 5} }
    ])
}