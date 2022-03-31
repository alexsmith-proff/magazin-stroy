
export function arrayToTree(array) {
      
    const arr = array.filter(item => {
        // создаем у каждого элемента массив из ссылок на его потомков
        item.children = array.filter(i => i.parent === item._id);
        // оставляем в фильтруемом массиве только элементы верхнего уровня
        return item.parent == null;
      })
      return arr
}

export function FindIdBySlug(slug, arr) {
  const resultArr = arr.filter((item) => item.slug == slug)
  return resultArr[0]._id
}

// Поиск категории по id. Возвращает объект категории
export function findCategory(id, arr){
  let res = null
  for(let i = 0; i < arr.length; i++){
    if(arr[i]._id == id){
      res = arr[i]
    }
  }
  return res
}

// Хлебные крошки. Возвращает массив категорий  
export function breadCrumbs(id, arr){
  let resultArr = []
  let work = true
  do{
    let category = findCategory(id, arr)
    if(category == null){
      work = false
    }
    if(category.parent == null){
      resultArr.push(category)
      work = false
    }else{
      resultArr.push(category)
      id = category.parent    
    }
  }while(work)
  return resultArr.reverse()
}
