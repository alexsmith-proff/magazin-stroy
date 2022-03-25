import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // unique: true
    }, 
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        // required: true
    }, 
    quantityInStock: {
        type: Number, 
        min: 0,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    active: {
        type: Boolean,
        default: false
    }, 
    mainPicture: {
        type: String
    },
    // arrPhotos: [String]    
})

export const productModel = mongoose.model('Product', productSchema)