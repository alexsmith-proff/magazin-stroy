import { Router } from "express";
import { productModel } from "../models/product.model.js";
import { categorySaveDB, getCategories, getChildCategory, getProductsByCategory } from "../service/category.service.js";

export const categoryRouter = Router()

categoryRouter.post('/create', async (req, res) => {
    try {
        const { name, parentCategoryId } = req.body
        // console.log(name);

        await categorySaveDB(name, parentCategoryId)
        res.status(201).json({
            message: `Категория ${name} создана`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания категории'
        })
        
    }
})

categoryRouter.get('/', async (req, res) => {
    try {
        const categories = await getCategories()
        res.status(200).json({
            categories
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка чтения категорий'
        })        
    }
})

categoryRouter.get('/:id', async (req, res) => {
    try {
        let parentCategoryArr = await getChildCategory(req.params.id)
        // console.log('parentCategoryArr = ', parentCategoryArr);
        let products = await getProductsByCategory(parentCategoryArr)
        res.status(200).json(products)        
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка чтения категорий'
        })        
    }
})