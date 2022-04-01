import { Router } from "express"
import { getCarousel, getRandomCarousel, saveCarouselItemDB } from "../service/carousel.service.js"
import { saveFile } from "../service/files.service.js"
import { categoryRouter } from "./category.route.js"

export const carouselRouter = Router()

carouselRouter.post('/create', async (req, res) => {
    try {
        const fileName = saveFile('img/static', req.files.picture)
        await saveCarouselItemDB({...req.body, picture: fileName})

        res.status(201).json({...req.body, picture: fileName})
        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка загрузки carouselItem'
        })          
    }
})

carouselRouter.get('/', async (req, res) => {
    try {
        const carousel = await getCarousel()
        res.json(carousel)

    } catch (error) {
        res.status(500).json({
            message: 'Ошибка загрузки carouselItem'
        })
    }

})

carouselRouter.get('/random-product', async (req, res) => {
    try {
        const product = await getRandomCarousel()
        res.json(product)

    } catch (error) {
        res.status(500).json({
            message: 'Ошибка загрузки carousel ramdom-product'
        })
    }

})