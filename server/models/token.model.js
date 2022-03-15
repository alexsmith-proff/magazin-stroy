import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accessToken: {
        type: String,
        required: true,
    }
})

export const tokenModel = mongoose.model('Token', tokenSchema)