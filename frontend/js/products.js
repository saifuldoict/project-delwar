
import { makeUrl } from "../js/shared/commonFunction.js";
import productCard from '../js/shared/productCard.js';
function loadProducts(){
     const url = makeUrl('/products');

    // const url = 'http://localhost:5000/api/products';
    
    fetch(url)
    .then(res=> res.json())
    .then(res=> printData(res))
}

function printData(products){
    const div = document.getElementById('our-products-container');

    let htmlCode =``;

    products.forEach(product => {
        const code = productCard(product);
        htmlCode+= code;

        div.innerHTML= htmlCode;
    });
      
}

loadProducts();