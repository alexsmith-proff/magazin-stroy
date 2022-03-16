import { tokenModel } from "../models/token.model.js";
import { userModel } from "../models/user.model.js";

export async function findUser(field, value) {
    return await userModel.findOne({
        [field]: value
    })
}

export async function findUserLink(link) {
    return await userModel.findOne({
        activationLink: link
    })
}

export async function findUserByToken(token) {
    return await tokenModel.findOne({accessToken: token}).populate('user')


    // return await userModel.findOne({
    //     accessToken: token
    // })

    // console.log('findUserByToken (token): ', token)



    // const tokenFind = await tokenModel.findOne({
    //     accessToken: token
    // })
    // console.log('findUserByToken (tokenFind): ', tokenFind)

    // if(!tokenFind) {
    //     return null
    // }
    // console.log(tokenFind.user)

    // return await userModel.findById(tokenFind.user)
}

export async function userSaveDB(userData, link) {
    const user = new userModel({
        email: userData.email,
        password: userData.password,
        name: userData.firstName,
        // middlename: userData.middlename,
        surname: userData.lastName,
        activationLink: link
    })
    // Записываем в БД, Создаем пользователя в БД
    await user.save()

    return user
}

// Проверяет активирован пользователь
export async function isUserActivate(email) {
    const userN = await userModel.findOne({
        email: email
    })
    if(userN.isActivated) {
        return true
    }else {
        return false
    }

}