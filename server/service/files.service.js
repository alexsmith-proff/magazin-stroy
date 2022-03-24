import { v4 as uuidv4 } from 'uuid'
import path from 'path'

export function saveFile(dir, file) {
    try {
        const fileName = uuidv4() + '.jpg'
        const filePath = path.resolve(dir, fileName)
        // Перемещаем файл по пути filePath
        file.mv(filePath)
        return fileName
        
    } catch (error) {
        console.log(e)        
    }
}