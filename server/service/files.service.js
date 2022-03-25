import { v4 as uuidv4 } from 'uuid'
import path from 'path'

export function saveFile(dir, file) {
    try {
        console.log('dir', dir)
        const fileName = uuidv4() + '.jpg'
        console.log('fileName', fileName)
        const filePath = path.resolve(dir, fileName)
        console.log('filePath', filePath)
        
        // Перемещаем файл по пути filePath
        file.mv(filePath)
        return fileName
        
    } catch (error) {
        console.log(e)        
    }
}