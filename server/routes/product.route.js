import { Router } from "express";
import { productFind, productSaveDB } from "../service/product.service.js";

export const productRouter = Router()

productRouter.post('/add', async (req, res) => {
    try {
        const { name } = req.body
        if(await productFind(name)) {
            return res.status(400).json({
                message: 'Такой товар есть'
            })
        }
        await productSaveDB(req.body)        
        res.status(201).json({
            message: `Товар ${name} создан`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания товара'
        })        
    }
})