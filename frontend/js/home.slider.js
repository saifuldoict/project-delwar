import { makeUrl } from "./shared/commonFunction.js";

function loadSliders(){
    const url = makeUrl('/get-sliders')
    // const url ='http://localhost:5000/api/get-sliders';
    
    fetch(url)
    .then(res=> res.json())
    .then(images=>{

        let index = 0;
    function changeimg (){
        const container = document.getElementById('slider_container');
        const htmlCode = ` <img src ='${images [index].img}'/>`
    
        container.innerHTML= htmlCode;
    
        if(index< images.length-1){
            index++
        }
        else{
            index=0
        }
    }
    setInterval(changeimg, 3000);
        
    })
    
    

}

loadSliders()








 
 


 
