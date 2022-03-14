import { Router } from "express"

import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

import { findUser, findUserLink, userSaveDB } from "../service/user.service.js";
import { sendMail } from "../service/mail.service.js"

export const userRouter = Router()

userRouter.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body
        // Ищем в БД email
        const condidate = await findUser('email', email)

        // Проверка на существование пользователя
        if(condidate) {
            return res.status(400).json({
                message: 'Такой пользователь существует'
            })
        }

        // Генерируем activationLink
        const activationLink = uuidv4()

        //Отправляем письмо на почту для активациии
        // await sendMail(email, activationLink)        

        // Хешируем password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Запись user в БД
        await userSaveDB( {...req.body, password:hashedPassword}, activationLink )

        // Ответ клиенту
        res.status(201).json({
            message: `Пользователь с email ${email} создан`  
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка регистрации'
        })          
    }
})

userRouter.get('/activate/:link', async (req, res) => {
    try {
        const user = await findUserLink(req.params.link) 
        if(!user) {
            return res.status(400).json({
                message: 'Некорректная ссылка активации'
            })
        } 
        user.isActivated = true

        await user.save()  

        return res.redirect(process.env.CLIENT_URL)    
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка активации'
        })                
    }
    
})