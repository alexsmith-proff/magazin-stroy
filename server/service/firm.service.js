import { firmModel } from "../models/firm.model.js";

export async function firmSaveDB(firmName) {
    const firm = new firmModel({
        name: firmName
    }) 

    // Записываем фирму в БД
    await firm.save() 
}

export async function firmFind(firmName) {
    return await firmModel.findOne({
        name: firmName
    })
}