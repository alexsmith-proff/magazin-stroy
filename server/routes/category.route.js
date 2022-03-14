import { Router } from "express";
import { categorySaveDB } from "../service/category.service.js";

export const categoryRouter = Router()

categoryRouter.post('/create', async (req, res) => {
    try {
        const { name } = req.body
        // console.log(name);

        await categorySaveDB(name)
        res.status(201).json({
            message: `Категория ${name} создана`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания категории'
        })
        
    }
})