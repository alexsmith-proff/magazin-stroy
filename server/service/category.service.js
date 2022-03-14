import { categoryModel } from "../models/category.model.js";

export async function categorySaveDB(nameCategory) {
    const category = new categoryModel({
        name: nameCategory
    })
    await category.save()
}