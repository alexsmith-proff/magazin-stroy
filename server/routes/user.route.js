import { Router } from "express"

import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

import { findUser, findUserByToken, findUserLink, isUserActivate, userSaveDB } from "../service/user.service.js";
import { sendMail } from "../service/mail.service.js"
import { generateToken, tokenSaveDB, validateAccessToken } from "../service/token.service.js";

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

userRouter.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        console.log('email', email)
        console.log('password', password)

        // Ищем зарегистрированного user в БД по email
        const user = await findUser('email', email)

        console.log('user', user)
        
        // Проверка на существование пользователя
        if (!user) {
            console.log('Пользователь не существует')
            return res.status(400).json({
                message: 'Логин или пароль неверный'
            })
        }

        // Проверка совпадения пароля
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            console.log('Пароль неверный')
            return res.status(500).json({
                message: 'Логин или пароль неверный Password'
            })
        }

        // console.log('1')

        // // Проверка активации аккаунта
        // const isUserActive = await  isUserActivate(email)
        // console.log('isUserActive', isUserActive)
        // if(!isUserActive) {
        //     console.log('Аккаунт не активирован')
        //     return res.status(500).json({
        //         message: 'Аккаунт не активирован'  
        //     })          
        // }

        // console.log('2')

        // Генерируем accessToken
        const accessToken = generateToken(user.id, process.env.JWT_ACCESS_SECRET, '10h')
        // const accessToken = generateToken(user.id, process.env.JWT_ACCESS_SECRET, '1m')
        console.log('Генерация accessToken: ', accessToken)

        // Генерируем refreshToken
        // const refreshToken = generateToken(user.id, config.get('JWT_REFRESH_SECRET'), '30d')
        
        // Записываем в БД refreshToken
        await tokenSaveDB(user.id, accessToken)
        console.log('accessToken записан в БД')

        // refreshToken будем хранить в cookie
        // res.cookie('refreshToken', refreshToken, {
        //     // Время жизни 30д
        //     maxAge: 30 * 24 * 60 * 60 * 1000,
        //     // Cookie нельзя изменять
        //     httpOnly: true
        // })


        // Ответ клиенту status по умолчанию 200
        res.json({
            accessToken: accessToken
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка регистрации'
        })        
    }
})


userRouter.get('/me', async (req, res) => {
    try {
        // console.log(req.headers.authorization)
        if(!req.headers.authorization){
            return res.status(403).json({
                message: 'Ошибка доступа'
            })
        }

        const token = req.headers.authorization.split(' ')[1]
        // console.log(token)

        const valideToken = validateAccessToken(token)
        if(!valideToken) {
            console.log('Ошибка валидации')
            return res.status(403).json({
                message: 'Ошибка доступа'
            })            
        }

        const user = await findUserByToken(token)
        if(!user) {
            return res.status(500).json({
                message: 'Ошибка сервера'
            })
        }

        // Ответ клиенту
        res.status(200).json({
            user: user.user
        })


        // const {email, password} = req.body
        // // Ищем в БД email
        // const condidate = await findUser('email', email)

        // // Проверка на существование пользователя
        // if(condidate) {
        //     return res.status(400).json({
        //         message: 'Такой пользователь существует'
        //     })
        // }

        // // Генерируем activationLink
        // const activationLink = uuidv4()

        // //Отправляем письмо на почту для активациии
        // // await sendMail(email, activationLink)        

        // // Хешируем password
        // const hashedPassword = await bcrypt.hash(password, 12)

        // // Запись user в БД
        // await userSaveDB( {...req.body, password:hashedPassword}, activationLink )

        // // Ответ клиенту
        // res.status(201).json({
        //     message: `Пользователь с email ${email} создан`  
        // })
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка сервера'
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