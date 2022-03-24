import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
    },
    parent: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // ref: 'Category',
        default: null
    }
})

export const categoryModel = mongoose.model('Category', categorySchema)