import { categoryModel } from "../models/category.model.js";
import { productModel } from "../models/product.model.js";


function findChild(idArr, arr){
    let resultArr = []
    for (let i = 0; i < idArr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if(String(arr[j].parent) == String(idArr[i])){
          resultArr.push(arr[j]._id)
        }
      }
    }
    if(resultArr != null) {
      return resultArr
    }else return null
  }


// Сохранение в БД категории
export async function categorySaveDB(nameCategory, categoryId) {
    const category = new categoryModel({
        name: nameCategory, 
        parent: categoryId
    })
    await category.save()
}


// Чтение всех категорий
export async function getCategories() {
    return await categoryModel.find()
}

// Возвращает в виде массива все id дочерних категорий
export async function getChildCategory(categoryId){
    let idArr = [categoryId]
    let resultArr = [categoryId]
    let categoryArr = await getCategories()
    do {
      idArr = findChild(idArr, categoryArr)
      resultArr = [...resultArr, ...idArr]
    } while (idArr.length > 0)
    return resultArr
}

export async function getProductsByCategory(id) {
    console.log('id = ', id)
    const products = await productModel.find({
        category : { $in: id}
    })
    // console.log('products = ', products)
    return products 
}
