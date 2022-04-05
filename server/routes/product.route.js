import { Router } from "express";
import { saveFile } from "../service/files.service.js";
import { getProductById, productSaveDB } from "../service/product.service.js";

export const productRouter = Router()

productRouter.post('/create', async (req, res) => {
    try {
        const { name } = req.body
        // if(await productFind(name)) {
        //     return res.status(400).json({
        //         message: 'Такой товар есть'
        //     })
        // }

        let fileName = saveFile('img/static/products', req.files.mainPicture)

        // await productSaveDB(req.body)        
        await productSaveDB({...req.body, mainPicture: fileName})        
        res.status(201).json({
            message: `Товар создан`
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания товара'
        })        
    }
})

productRouter.get('/:id', async (req, res) => {
    try {
        let product = await getProductById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: 'Такой товар не существеут'
        })        
    }
})