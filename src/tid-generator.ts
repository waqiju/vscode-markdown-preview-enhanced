/** 
 * _tid_20180324_225101
 */

import * as path from "path"

function align2(num) {
    return num < 10 ? '0'+num : num
}

function getFormatDate(){  
    const date = new Date()
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();
    const h = date.getHours();
    const mm = date.getMinutes();
    const s = date.getSeconds();

    return '' + y + align2(m) + align2(d)+'_'+align2(h)+align2(mm)+align2(s);
}

function getTid() {
    return '_tid_' + getFormatDate()
}

export function attachTid(filePath:string) {
    const tid = getTid()

    const fileName = path.basename(filePath)
    const lastDotOffset = fileName.lastIndexOf('.')

    if (lastDotOffset > 0) {
        const fileNameWithoutExt = fileName.slice(0, lastDotOffset)
        const ext = fileName.slice(lastDotOffset)
        return fileNameWithoutExt + tid + ext
    } else {
        return fileName + tid
    }
}

export function formatInsertText(description:string, url:string) {
    // const openNativeExtensions = ['.pdf', '.xls', '.xlsx', '.doc', '.ppt', '.docx', '.pptx', '.7z', '.zip']
    const imageExtensions = ['.bmp','.jpg','.png','.tif','.gif','.pcx','.tga','.exif','.fpx','.svg','.psd','.cdr','.pcd','.dxf','.ufo','.eps','.ai','.raw','.WMF','.webp']
    const ext = path.extname(url).toLowerCase();
    let text = "";
    if (imageExtensions.indexOf(ext) >= 0) {
        text =`<img width='' src='${url}'/>`
    }
    else {
        text = `<a href='${url}'>${description}</a>`
    }

    return text
}