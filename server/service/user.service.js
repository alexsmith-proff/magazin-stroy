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

export async function userSaveDB(userData, link) {
    const user = new userModel({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        middlename: userData.middlename,
        surname: userData.surname,
        activationLink: link
    })
    // Записываем в БД, Создаем пользователя в БД
    await user.save()

    return user
}

// Проверяет активирован пользьзователь
export async function isUserActivate(email) {
    const userN = await User.findOne({
        email: email
    })
    if(userN.isActivated) {
        return true
    }else {
        return false
    }

}