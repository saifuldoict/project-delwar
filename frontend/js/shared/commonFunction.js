export const sliceTitle = (title)=>{
    const result = title.length > 20 ? title.slice (0,20)  + '....': title;
    return result; 
}


export const makeUrl = (path)=>{
    const url = `http://localhost:5000/api${path}`;
    return url;
    
}


export const useParams = ()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const parse= queryParams;
    const querys = [...parse];
 
    const obj={};
     
    querys.forEach((query)=>{
        
        obj[query[0]]= query[1];

    });
   // console.log(obj)
    return obj;
};