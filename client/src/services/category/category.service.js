
function arrayToTree(array) {
      
    const arr = array.filter(item => {
        // создаем у каждого элемента массив из ссылок на его потомков
        item.children = array.filter(i => i.parent === item._id);
        // оставляем в фильтруемом массиве только элементы верхнего уровня
        return item.parent == null;
      })
      return arr
}

export default arrayToTree