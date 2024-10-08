import loading from "./shared/loading.js";

const div = document.getElementById('root');

div.innerHTML = loading();

setTimeout(()=>{
div.innerHTML= 'content'
}, 3000)