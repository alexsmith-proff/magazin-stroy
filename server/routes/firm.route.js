import { Router } from "express";
import { firmFind, firmSaveDB } from "../service/firm.service.js";

export const firmRouter = Router()

firmRouter.post('/add', async (req, res) => {
    try {
        const { name } = req.body
        // const cand = await firmFind(name)
        // console.log(cand);
        if(await firmFind(name)) {
        // if(cand) {
            return res.status(400).json({
                message: 'Такой производитель есть'
            })
        }
        await firmSaveDB(name)        
        res.status(201).json({
            message: `Производитель ${name} создан`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка создания производителя'
        })        
    }
})