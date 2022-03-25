import { categoryModel } from "../models/category.model.js";
import { productModel } from "../models/product.model.js";

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

export async function getProductsByCategory(id) {
    console.log('id = ', id)
    const pr = await productModel.find({
        category : id
    })
    console.log('pr = ', pr)
    return pr 
}
