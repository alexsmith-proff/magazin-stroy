import { productModel } from "../models/product.model.js";

export async function productSaveDB(productData) {
    // console.log(productData);
    const product = new productModel({
        name: productData.name,
        description: productData.description,
        category: productData.categoryId,
        quantityInStock: productData.quantityInStock,
        price: productData.price,
        // active: productData.active,

        // mainPhoto: productData.mainPhoto,
        // arrPhotos: [productData.arrPhotos]
    })

    // Записываем товар в БД
    await product.save()
}

export async function productFind(name) {
    return await productModel.findOne({name})
}