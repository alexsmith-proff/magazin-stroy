import mongoose from "mongoose";

const firmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export const firmModel = mongoose.model('Firm', firmSchema)