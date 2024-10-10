export const sliceTitle = (title)=>{
    const result = title.length > 20 ? title.slice (0,20)  + '....': title;
    return result; 
}


export const makeUrl = (path)=>{
    const url = `http://localhost:5000/api ${path}`;
    return url;
    
}
