function loadSliders(){
    const url ='../../data.json';
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








 
 


 
