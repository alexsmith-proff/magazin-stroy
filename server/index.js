import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload';
import { categoryRouter } from './routes/category.route.js';
import { firmRouter } from './routes/firm.route.js';
import { carouselRouter } from './routes/carousel.route.js';
import { productRouter } from './routes/product.route.js';
import { userRouter } from './routes/user.route.js';

console.log(process.env.DB_URL);

const app = express()
app.use(express.json())
app.use(express.static('img/static'))
app.use(fileUpload({}))

app.use('/api/auth', userRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.use('/api/firm', firmRouter)
app.use('/api/carousel', carouselRouter)

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('База данных подключена')
        app.listen(process.env.PORT, () => console.log(`Сервер запущен на порту: ${process.env.PORT}`))
        
    } catch (error) {
        console.log(error)
    }
}

startApp()