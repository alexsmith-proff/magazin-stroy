import mongoose from "mongoose"

const carouselSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    index: {
        type: Number
    },
    picture: {
        type: String,
        required: true
    }
})

export const carouselModel = mongoose.model('Carousel', carouselSchema)