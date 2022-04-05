import { productModel } from "../models/product.model.js";

export async function productSaveDB(productData) {
    console.log(productData);
    const product = new productModel({
        name: productData.name,
        description: productData.description,
        category: productData.categoryId,
        quantityInStock: productData.quantityInStock,
        price: productData.price,
        // active: productData.active,

        mainPicture: productData.mainPicture,
        // arrPhotos: [productData.arrPhotos]
    })

    // Записываем товар в БД
    await product.save()
}

export async function productFind(name) {
    return await productModel.findOne({name})
}
export async function getProductById(_id) {
    return await productModel.findOne({ _id })
}