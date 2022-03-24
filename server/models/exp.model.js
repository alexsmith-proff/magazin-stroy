import mongoose from "mongoose"

const expSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        // required: true,
        // unique: true
    },
    parent: {
        type: Number,
        default: null
    }
})

export const expModel = mongoose.model('Exp', expSchema)