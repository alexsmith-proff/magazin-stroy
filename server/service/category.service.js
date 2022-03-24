import { categoryModel } from "../models/category.model.js";

export async function categorySaveDB(nameCategory, categoryId) {
    const category = new categoryModel({
        name: nameCategory, 
        parent: categoryId
    })
    await category.save()
}



export async function getCategories() {
    return await categoryModel.find()
}

